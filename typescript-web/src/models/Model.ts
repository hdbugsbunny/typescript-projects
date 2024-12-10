interface MODEL_ATTRIBUTES<T> {
  set(update: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface MODEL_SYNC<T> {
  fetchData(id: number): Promise<T>;
  saveData(data: T): Promise<T>;
}

interface MODEL_EVENTS {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface HASID {
  id?: number;
}

export class Model<T extends HASID> {
  constructor(
    private attributes: MODEL_ATTRIBUTES<T>,
    private events: MODEL_EVENTS,
    private syncs: MODEL_SYNC<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Must have an ID to fetch data");
    }

    this.syncs.fetchData(id).then((data) => {
      this.set(data);
      this.trigger("fetch");
    });
  }

  save(): void {
    this.syncs.saveData(this.attributes.getAll()).then((data) => {
      this.set(data);
      this.trigger("save");
    });
  }
}

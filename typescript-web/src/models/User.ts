interface USERPROPS {
  name?: string;
  age?: number;
}

type CALLBACK = () => void;

export class User {
  events: { [key: string]: CALLBACK[] } = {};

  constructor(private data: USERPROPS) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: USERPROPS): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: CALLBACK): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  trigger(eventName: string): void {
    if (!this.events[eventName] || !this.events[eventName].length) {
      return;
    }

    this.events[eventName].forEach((callback) => callback());
  }
}

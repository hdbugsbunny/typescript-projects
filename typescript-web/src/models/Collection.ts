import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetchAll(): Promise<void> {
    const response: Response = await fetch(`${this.rootUrl}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch all data: ${response.statusText}`);
    }

    const data: [] = await response.json();
    data.forEach((value: K) => this.models.push(this.deserialize(value)));

    this.trigger("fetched");
  }
}

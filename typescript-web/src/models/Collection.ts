import { Eventing } from "./Eventing";
import { User } from "./User";

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  async fetchAllUsers(): Promise<void> {
    const response: Response = await fetch(`${this.rootUrl}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    data.forEach((value: { id?: number; name?: string; age?: number }) => {
      const user = User.buildUser(value);
      this.models.push(user);
    });

    this.trigger("fetched");
  }
}

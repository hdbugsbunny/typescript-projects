import { Eventing } from "./Eventing";

interface USERPROPS {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: USERPROPS) {}

  get(propName: string): string | number | undefined {
    return this.data[propName];
  }

  set(update: USERPROPS): void {
    Object.assign(this.data, update);
  }
}

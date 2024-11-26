interface USERPROPS {
  name?: string;
  age?: number;
}

type CALLBACK = () => {};

export class User {
  events: { [key: string]: CALLBACK[] } = {};

  constructor(private data: USERPROPS) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: USERPROPS): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: CALLBACK) {}
}

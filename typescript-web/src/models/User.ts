interface USERPROPS {
  name: string;
  age: number;
}

export class User {
  constructor(private data: USERPROPS) {}

  get(propName: string): string | number {
    return this.data[propName];
  }
}

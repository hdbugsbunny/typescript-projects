interface USERPROPS {
  id?: number;
  name?: string;
  age?: number;
}

type CALLBACK = () => void;

export class User {
  events: { [key: string]: CALLBACK[] } = {};

  constructor(private data: USERPROPS) {}

  get(propName: string): string | number | undefined {
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

  fetchData(): void {
    fetch(`http://localhost:3000/users/${this.get("id")}`)
      .then((response: Response): Promise<USERPROPS> => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }

        return response.json();
      })
      .then((data: USERPROPS): void => this.set(data))
      .catch((error: Error): void => console.error("Fetch error:", error));
  }

  saveData(): void {
    const id = this.get("id");
    const url = id
      ? `http://localhost:3000/users/${id}`
      : "http://localhost:3000/users";
    const method = id ? "PUT" : "POST";

    fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.data),
    })
      .then((response: Response): Promise<USERPROPS> => {
        if (!response.ok) {
          throw new Error(
            `Failed to ${method === "PUT" ? "update" : "create"} user: ${
              response.statusText
            }`
          );
        }
        return response.json();
      })
      .then((data: USERPROPS): void => this.set(data))
      .catch((error: Error): void =>
        console.error(`${method === "PUT" ? "Save" : "Create"} error:`, error)
      );
  }
}

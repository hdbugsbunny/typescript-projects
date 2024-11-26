export class Sync<T> {
  constructor(public rootUrl: string) {}

  async fetchData(id: number): Promise<T> {
    const response: Response = await fetch(`${this.rootUrl}/${id}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  }

  async saveData(data: T): Promise<T> {
    const { id } = data;
    const url = id ? `${this.rootUrl}/${id}` : this.rootUrl;
    const method = id ? "PUT" : "POST";

    const response: Response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        `Failed to ${method === "PUT" ? "update" : "create"} user: ${
          response.statusText
        }`
      );
    }
    return await response.json();
  }
}

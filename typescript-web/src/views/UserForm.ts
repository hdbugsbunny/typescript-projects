export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <form>
            <input type="text" id="name" placeholder="Name" required>
            <input type="number" id="age" placeholder="Age" required>
            <button type="submit">Submit</button>
        </form>
      </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}

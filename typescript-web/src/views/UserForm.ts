import { User } from "./../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHoverHeading,
    };
  }

  onButtonClick(): void {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const ageInput = document.getElementById("age") as HTMLInputElement;

    console.log(`Name: ${nameInput.value}, Age: ${ageInput.value}`);
  }

  onHoverHeading(): void {
    console.log(`Hover Heading`);
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <input type="text" id="name" placeholder="Name" required>
        <input type="number" id="age" placeholder="Age" required>
        <button>Submit</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const fragmentEvents = this.eventsMap();

    for (const event in fragmentEvents) {
      const [eventType, selector] = event.split(":");
      const callback = fragmentEvents[event];

      fragment.querySelectorAll(selector).forEach((element: Element) => {
        element.addEventListener(eventType, callback);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}

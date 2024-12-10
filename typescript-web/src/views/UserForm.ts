import { User } from "./../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
    this.model.trigger("change");
  };

  onSetNameClick = (): void => {
    const nameInput = this.parent.querySelector("#name") as HTMLInputElement;
    const name = nameInput.value;
    this.model.set({ name });
    this.model.trigger("change");
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <hr>
        <input type="text" id="name" placeholder="Name">
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
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
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}

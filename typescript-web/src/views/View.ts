import { User } from "./../models/User";

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
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

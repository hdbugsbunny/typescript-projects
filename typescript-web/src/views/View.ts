import { HASID, Model } from "../models/Model";

export abstract class View<T extends Model<K>, K extends HASID> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  regionsMap(): { [key: string]: string } {
    return {};
  }

  eventsMap(): { [key: string]: () => void } {
    return {};
  }

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

  bindRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (const region in regionsMap) {
      const selector = regionsMap[region];
      const element = fragment.querySelector(selector);

      if (element) {
        this.regions[region] = element;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.bindRegions(templateElement.content);

    this.onRender();

    this.parent.append(templateElement.content);
  }
}

import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    const models = this.collection.models;

    templateElement.innerHTML = models
      .map((model) => {
        const itemParent = document.createElement("div");
        this.renderItem(model, itemParent);
        return itemParent.innerHTML;
      })
      .join("");

    this.parent.append(templateElement.content);
  }
}

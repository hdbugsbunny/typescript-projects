import { View } from "./View";

export class UserForm extends View {
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
}

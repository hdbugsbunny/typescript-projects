import { User, USERPROPS } from "./../models/User";
import { View } from "./View";

export class UserForm extends View<User, USERPROPS> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-model": this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
      <div>
        <input type="text" id="name" placeholder="${this.model.get("name")}">
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}

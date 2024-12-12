import { User, USERPROPS } from "../models/User";
import { View } from "./View";

export class UserEdit extends View<User, USERPROPS> {
  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}

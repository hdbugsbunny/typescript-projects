import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";

interface USERPROPS {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = "http://localhost:3000/users";

export class User extends Model<USERPROPS> {
  static buildUser(attrs: USERPROPS): User {
    return new User(
      new Attributes<USERPROPS>(attrs),
      new Eventing(),
      new ApiSync<USERPROPS>(ROOT_URL)
    );
  }
}

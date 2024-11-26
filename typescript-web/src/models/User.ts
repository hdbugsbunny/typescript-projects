import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface USERPROPS {
  id?: number;
  name?: string;
  age?: number;
}

const ROOT_URL = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public syncs: Sync<USERPROPS> = new Sync<USERPROPS>(ROOT_URL);
}

import { User } from "./models/User";
import { UserEdit } from "./views/UserEdit";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root Element Not Found!");
}

const user = User.buildUser({ name: "Harshit", age: 27 });
const userEdit = new UserEdit(root, user);

userEdit.render();

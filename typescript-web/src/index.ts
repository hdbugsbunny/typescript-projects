import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const root = document.getElementById("root");
if (!root) {
  throw new Error("Root Element Not Found!");
}

const user = User.buildUser({ name: "Harshit", age: 27 });
const userForm = new UserForm(root, user);

userForm.render();

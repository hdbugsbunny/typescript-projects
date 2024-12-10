import { User } from "./models/User";
import { UserForm } from "./views/UserForm";

const root = document.getElementById("root");
const user = User.buildUser({ name: "Harshit", age: 27 });
//! The ! operator after root is a non-null assertion operator in TypeScript.
//! It is used to tell the TypeScript compiler, "I am sure this value is not null or undefined, so don't complain about it."
const userForm = new UserForm(root!, user);

userForm.render();

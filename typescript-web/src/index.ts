import { User } from "./models/User";

const user = new User({ name: "Harshit", age: 27 });
user.on("change", () => {
  console.log("User data has changed!");
});
user.on("change", () => {
  console.log("User data has been updated!");
});
user.on("click", () => {
  console.log("User has been clicked!");
});

user.trigger("change");
user.trigger("click");
user.trigger("save");

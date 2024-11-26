import { User } from "./models/User";

const user = new User({ name: "Harshit", age: 27 });
user.on("change", () => {});
user.on("change", () => {});
user.on("click", () => {});
console.log("🚀 ~ user:", user);

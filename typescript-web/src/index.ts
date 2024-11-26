import { User } from "./models/User";

const user = new User({ name: "Harshit", age: 27 });
console.log(user.get("name")); // Harshit
console.log(user.get("age")); // 27

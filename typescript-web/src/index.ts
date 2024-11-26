import { User } from "./models/User";

const user = new User({ name: "Harshit", age: 27 });
console.log(user.get("name")); // Harshit
console.log(user.get("age")); // 27

user.set({ name: "John", age: 30 });
console.log(user.get("name")); // John
console.log(user.get("age")); // 30

user.set({ name: "Kyle" });
console.log(user.get("name")); // Kyle

user.set({ age: 25 });
console.log(user.get("age")); // 25

user.set({});
console.log(user.get("name")); // undefined
console.log(user.get("age")); // undefined

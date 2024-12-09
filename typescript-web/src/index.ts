import { User } from "./models/User";

const user1 = new User({ name: "Harshit", age: 27 });
user1.on("save", () => console.log("User1 saved"));
user1.trigger("save");
console.log("🚀 ~ user1.get:", user1.get("name"));
// user1.saveData(); // Saving The New User

const user2 = new User({ name: "Harsh", age: 25 });
user2.on("save", () => console.log("User2 saved"));
user2.trigger("save");
console.log("🚀 ~ user2.get:", user2.get("age"));
// user2.saveData(); // Saving The New User

// const user3 = new User({ id: 2 });
// user3.set({ name: "Kyle", age: 30 });
// user3.events.on("save", () => console.log("User3 updated"));
// user3.events.trigger("save");
// user3.saveData(); // Updating The Existing User

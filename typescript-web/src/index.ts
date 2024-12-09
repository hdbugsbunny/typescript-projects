import { User } from "./models/User";

const user1 = new User({ name: "Harshit", age: 27 });
user1.on("save", () => console.log("User1 saved", user1));
user1.trigger("save");
user1.save(); // Saving The New User

const user2 = new User({ name: "Harsh", age: 25 });
user2.on("save", () => console.log("User2 saved", user2));
user2.trigger("save");
user2.save(); // Saving The New User

const user3 = new User({ id: 2 });
user3.on("fetch", () => console.log("User3 fetched", user3));
user3.fetch();
user3.set({ name: "Kyle", age: 30 });
user3.on("save", () => console.log("User3 Updated", user3));
user3.save(); // Updating The Existing User

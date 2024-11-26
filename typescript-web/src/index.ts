import { User } from "./models/User";

const user1 = new User({ name: "Harshit", age: 27 });
user1.saveData(); // Saving The New User

const user2 = new User({ name: "Harsh", age: 25 });
user2.saveData(); // Saving The New User

const user3 = new User({ id: 2 });
user3.set({ name: "Kyle", age: 30 });
user3.saveData(); // Updating The New User

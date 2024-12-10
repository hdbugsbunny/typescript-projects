import { Collection } from "./models/Collection";

const collection = new Collection("http://localhost:3000/users");
collection.on("fetched", () => console.log("All Users Fetched", collection));
collection.fetchAllUsers();

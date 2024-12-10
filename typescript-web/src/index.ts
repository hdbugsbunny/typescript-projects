import { User } from "./models/User";

const collection = User.buildUserCollection();
collection.on("fetched", () => console.log("All Users Fetched", collection));
collection.fetchAll();

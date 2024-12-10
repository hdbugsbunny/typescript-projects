import { Collection } from "./models/Collection";
import { User } from "./models/User";

const collection = new Collection<
  User,
  { id?: number; name?: string; age?: number }
>(
  "http://localhost:3000/users",
  (json: { id?: number; name?: string; age?: number }) => User.buildUser(json)
);
collection.on("fetched", () => console.log("All Users Fetched", collection));
collection.fetchAll();

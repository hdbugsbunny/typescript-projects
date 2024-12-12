import { Collection } from "./models/Collection";
import { User, USERPROPS } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection(
  "http://localhost:3000/users",
  (json: USERPROPS) => {
    return User.buildUser(json);
  }
);

users.on("fetched", () => {
  const root = document.getElementById("root");
  if (!root) {
    throw new Error("Root Element Not Found!");
  }

  new UserList(root, users).render();
});

users.fetchAll();

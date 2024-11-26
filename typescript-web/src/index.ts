import { User } from "./models/User";

const user = new User({ id: 1 });
user.fetchData();
setTimeout(() => {
  console.log("🚀 ~ user:", user);
}, 4000);

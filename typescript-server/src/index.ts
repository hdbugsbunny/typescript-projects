import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express from "express";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import { router } from "./routes/loginRoutes";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [""] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

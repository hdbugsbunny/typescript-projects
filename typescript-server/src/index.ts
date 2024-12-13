import bodyParser from "body-parser";
import express from "express";
import { router } from "./routes/loginRoutes";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

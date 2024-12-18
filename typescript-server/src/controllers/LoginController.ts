import { Response } from "express";
import { logger } from "../utils/helperFunc";
import { RequestBody } from "../utils/interfaces";
import { bodyValidator, controller, get, post, use } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
  @use(logger)
  getLogin(_: RequestBody, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label for="email">User Email:</label>
        <input type="email" id="email" name="email">
      </div>
      <div>
        <label for="password">User Password:</label>
        <input type="password" id="password" name="password">
      </div>
      <button>Login</button>
    </form>
  `);
  }

  @post("/login")
  @use(logger)
  @bodyValidator("email", "password")
  postLogin(req: RequestBody, res: Response) {
    //! Add your login logic here
    const { email, password } = req.body;
    //! Validate email and password
    if (email === "test2@test.com" && password === "1234567890") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.status(401).send("Invalid Email or Password!");
    }
  }

  @get("/logout")
  @use(logger)
  getLogout(req: RequestBody, res: Response) {
    req.session = null;
    res.redirect("/");
  }
}

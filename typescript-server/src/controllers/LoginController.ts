import { NextFunction, Request, Response } from "express";
import { bodyValidator, controller, get, post, use } from "./decorators";

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

function logger(req: RequestBody, res: Response, next: NextFunction) {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
}

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
}

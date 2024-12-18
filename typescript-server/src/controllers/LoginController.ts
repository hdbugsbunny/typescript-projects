import { Request, Response } from "express";
import { controller } from "./decorators/controller";
import { get } from "./decorators/routes";

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

@controller("/auth")
export class LoginController {
  @get("/login")
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
}

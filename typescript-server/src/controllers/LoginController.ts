import { Request, Response } from "express";
import { get } from "./decorators/routes";

@controller("/")
export class LoginController {
  @get("/login")
  getLogin(_: Request, res: Response): void {
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

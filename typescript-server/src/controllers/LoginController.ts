import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";

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
}

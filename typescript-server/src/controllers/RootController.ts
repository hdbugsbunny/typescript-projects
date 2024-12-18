import { NextFunction, Request, Response } from "express";
import { controller, get, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session?.loggedIn) {
    next();
  } else {
    res
      .status(403)
      .send(`<div>You Must be Logged in to Access This Page!</div>`);
  }
}

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(`
        <div>
          <div>You are Logged In!</div>
          <a href="/auth/logout">Logout</a>
          <a href="/protected">Protected</a>
        </div>
    `);
    } else {
      res.send(`
        <div>
          <div>You are Logged Out!</div>
          <a href="/auth/login">Login</a>
        </div>
    `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(_: Request, res: Response) {
    res.send("You are Accessing a Protected Resource!");
  }
}

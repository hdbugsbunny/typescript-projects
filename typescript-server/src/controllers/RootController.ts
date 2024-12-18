import { Response } from "express";
import { logger, requireAuth } from "../utils/helperFunc";
import { RequestBody } from "../utils/interfaces";
import { controller, get, use } from "./decorators";

@controller("")
export class RootController {
  @get("/")
  @use(logger)
  getRoot(req: RequestBody, res: Response) {
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
  @use(logger)
  @use(requireAuth)
  getProtected(_: RequestBody, res: Response) {
    res.send("You are Accessing a Protected Resource!");
  }
}

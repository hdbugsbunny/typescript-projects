import { NextFunction, Request, Response, Router } from "express";

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(
  req: RequestBody,
  res: Response,
  next: NextFunction
): void {
  if (req.session?.loggedIn) {
    next();
  } else {
    res
      .status(403)
      .send(`<div>You Must be Logged in to Access This Page!</div>`);
  }
}

const router = Router();

router.get("/", (req: RequestBody, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
        <div>
          <div>You are Logged In!</div>
          <a href="/logout">Logout</a>
        </div>
      `);
  } else {
    res.send(`
        <div>
          <div>You are Logged Out!</div>
          <a href="/login">Login</a>
        </div>
      `);
  }
});

router.get("/protected", requireAuth, (_: RequestBody, res: Response) => {
  res.send("You are Accessing a Protected Resource!");
});

router.get("/logout", (req: RequestBody, res: Response) => {
  req.session = null;
  res.redirect("/");
});

export { router };

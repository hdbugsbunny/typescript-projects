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

router.get("/login", (_: RequestBody, res: Response) => {
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
});

router.post("/login", (req: RequestBody, res: Response) => {
  //! Add your login logic here
  const { email, password } = req.body;
  //! Validate email and password
  if (!email || !password) {
    res.status(400).send("Email and Password are Required!");
  } else if (email === "test2@test.com" && password === "1234567890") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.status(401).send("Invalid Email or Password!");
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

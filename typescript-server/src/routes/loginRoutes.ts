import { Request, Response, Router } from "express";

interface RequestBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get("/login", (_: Request, res: Response) => {
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
    res
      .status(200)
      .send(
        `Login successful! Email: ${email.toUpperCase()}, Password: ${password}`
      );
  } else {
    res.status(401).send("Invalid Email or Password!");
  }
});

export { router };

import { Request, Response, Router } from "express";

const router = Router();

router.get("/login", (_: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label for="email">User Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div>
        <label for="password">User Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <button>Login</button>
    </form>
  `);
});

router.post("/login", (req: Request, res: Response) => {
  //! Add your login logic here
  const { email, password } = req.body;
  //! Validate email and password
  //   if (email === "example@email.com" && password === "password") {
  res.send(`Login successful! Email: ${email}, Password: ${password}`);
  //   } else {
  // res.status(401).send("Invalid email or password.");
  //   }
});

export { router };

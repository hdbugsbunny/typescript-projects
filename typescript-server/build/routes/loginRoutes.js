"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
    }
    else {
        res
            .status(403)
            .send(`<div>You Must be Logged in to Access This Page!</div>`);
    }
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send(`
        <div>
          <div>You are Logged In!</div>
          <a href="/logout">Logout</a>
        </div>
      `);
    }
    else {
        res.send(`
        <div>
          <div>You are Logged Out!</div>
          <a href="/login">Login</a>
        </div>
      `);
    }
});
router.get("/login", (_, res) => {
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
router.post("/login", (req, res) => {
    //! Add your login logic here
    const { email, password } = req.body;
    //! Validate email and password
    if (!email || !password) {
        res.status(400).send("Email and Password are Required!");
    }
    else if (email === "test2@test.com" && password === "1234567890") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.status(401).send("Invalid Email or Password!");
    }
});
router.get("/protected", requireAuth, (_, res) => {
    res.send("You are Accessing a Protected Resource!");
});
router.get("/logout", (req, res) => {
    req.session = null;
    res.redirect("/");
});

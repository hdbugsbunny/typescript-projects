"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
    }
    else {
        res
            .status(403)
            .send("<div>You Must be Logged in to Access This Page!</div>");
    }
}
var router = (0, express_1.Router)();
exports.router = router;
router.get("/", function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("\n        <div>\n          <div>You are Logged In!</div>\n          <a href=\"/logout\">Logout</a>\n        </div>\n      ");
    }
    else {
        res.send("\n        <div>\n          <div>You are Logged Out!</div>\n          <a href=\"/login\">Login</a>\n        </div>\n      ");
    }
});
router.post("/login", function (req, res) {
    //! Add your login logic here
    var _a = req.body, email = _a.email, password = _a.password;
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
router.get("/protected", requireAuth, function (_, res) {
    res.send("You are Accessing a Protected Resource!");
});
router.get("/logout", function (req, res) {
    req.session = null;
    res.redirect("/");
});

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
router.get("/protected", requireAuth, function (_, res) {
    res.send("You are Accessing a Protected Resource!");
});
router.get("/logout", function (req, res) {
    req.session = null;
    res.redirect("/");
});

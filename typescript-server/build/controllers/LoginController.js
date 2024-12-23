"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
var helperFunc_1 = require("../utils/helperFunc");
var decorators_1 = require("./decorators");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (_, res) {
        res.send("\n    <form method=\"POST\">\n      <div>\n        <label for=\"email\">User Email:</label>\n        <input type=\"email\" id=\"email\" name=\"email\">\n      </div>\n      <div>\n        <label for=\"password\">User Password:</label>\n        <input type=\"password\" id=\"password\" name=\"password\">\n      </div>\n      <button>Login</button>\n    </form>\n  ");
    };
    LoginController.prototype.postLogin = function (req, res) {
        //! Add your login logic here
        var _a = req.body, email = _a.email, password = _a.password;
        //! Validate email and password
        if (email === "test2@test.com" && password === "1234567890") {
            req.session = { loggedIn: true };
            res.redirect("/");
        }
        else {
            res.status(401).send("Invalid Email or Password!");
        }
    };
    LoginController.prototype.getLogout = function (req, res) {
        req.session = null;
        res.redirect("/");
    };
    __decorate([
        (0, decorators_1.get)("/login"),
        (0, decorators_1.use)(helperFunc_1.logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        (0, decorators_1.post)("/login"),
        (0, decorators_1.use)(helperFunc_1.logger),
        (0, decorators_1.bodyValidator)("email", "password"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "postLogin", null);
    __decorate([
        (0, decorators_1.get)("/logout"),
        (0, decorators_1.use)(helperFunc_1.logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], LoginController.prototype, "getLogout", null);
    LoginController = __decorate([
        (0, decorators_1.controller)("/auth")
    ], LoginController);
    return LoginController;
}());
exports.LoginController = LoginController;

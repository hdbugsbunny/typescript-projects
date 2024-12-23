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
exports.RootController = void 0;
var helperFunc_1 = require("../utils/helperFunc");
var decorators_1 = require("./decorators");
var RootController = /** @class */ (function () {
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        var _a;
        if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
            res.send("\n        <div>\n          <div>You are Logged In!</div>\n          <a href=\"/auth/logout\">Logout</a>\n          <a href=\"/protected\">Protected</a>\n        </div>\n    ");
        }
        else {
            res.send("\n        <div>\n          <div>You are Logged Out!</div>\n          <a href=\"/auth/login\">Login</a>\n        </div>\n    ");
        }
    };
    RootController.prototype.getProtected = function (_, res) {
        res.send("You are Accessing a Protected Resource!");
    };
    __decorate([
        (0, decorators_1.get)("/"),
        (0, decorators_1.use)(helperFunc_1.logger),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    __decorate([
        (0, decorators_1.get)("/protected"),
        (0, decorators_1.use)(helperFunc_1.logger),
        (0, decorators_1.use)(helperFunc_1.requireAuth),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getProtected", null);
    RootController = __decorate([
        (0, decorators_1.controller)("")
    ], RootController);
    return RootController;
}());
exports.RootController = RootController;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var express_1 = __importDefault(require("express"));
var controller_1 = require("./controllers/decorators/controller");
require("./controllers/LoginController");
var loginRoutes_1 = require("./routes/loginRoutes");
var app = (0, express_1.default)();
var port = 3000;
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: [""] }));
app.use(loginRoutes_1.router);
app.use(controller_1.router);
app.listen(port, function () { return console.log("Example app listening on port ".concat(port, "!")); });

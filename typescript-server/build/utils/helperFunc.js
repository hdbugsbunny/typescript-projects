"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidators = exports.routeBinder = exports.logger = exports.requireAuth = void 0;
var enums_1 = require("./enums");
var reflectMetadata_1 = require("./reflectMetadata");
var requireAuth = function (req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
    }
    else {
        res
            .status(403)
            .send("<div>You Must be Logged in to Access This Page!</div>");
    }
};
exports.requireAuth = requireAuth;
var logger = function (req, _, next) {
    console.log("Request: ".concat(req.method, " ").concat(req.url));
    next();
};
exports.logger = logger;
var routeBinder = function (method) {
    return function (path) {
        return function (target, key, _) {
            (0, reflectMetadata_1.setMeta)({
                metadataKey: enums_1.MetadataKeys.method,
                metadataValue: method,
                target: target,
                key: key,
            });
            (0, reflectMetadata_1.setMeta)({
                metadataKey: enums_1.MetadataKeys.path,
                metadataValue: path,
                target: target,
                key: key,
            });
        };
    };
};
exports.routeBinder = routeBinder;
var bodyValidators = function (keys) {
    return function (req, res, next) {
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (!req.body[key]) {
                res.status(422).send("Missing required field: ".concat(key));
                return;
            }
        }
        next();
    };
};
exports.bodyValidators = bodyValidators;

"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = controller;
var AppRouter_1 = require("../../AppRouter");
var enums_1 = require("../../utils/enums");
var helperFunc_1 = require("../../utils/helperFunc");
var reflectMetadata_1 = require("../../utils/reflectMetadata");
function controller(routePrefix) {
    return function (target) {
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var method = (0, reflectMetadata_1.getMeta)({
                metadataKey: enums_1.MetadataKeys.method,
                target: target.prototype,
                key: key,
            });
            var path = (0, reflectMetadata_1.getMeta)({
                metadataKey: enums_1.MetadataKeys.path,
                target: target.prototype,
                key: key,
            });
            var middlewares = (0, reflectMetadata_1.getMeta)({
                metadataKey: enums_1.MetadataKeys.middleware,
                target: target.prototype,
                key: key,
            }) || [];
            var reqBodyProps = (0, reflectMetadata_1.getMeta)({
                metadataKey: enums_1.MetadataKeys.validator,
                target: target.prototype,
                key: key,
            }) || [];
            var validators = (0, helperFunc_1.bodyValidators)(reqBodyProps);
            if (method && path) {
                router[method].apply(router, __spreadArray(__spreadArray(["".concat(routePrefix).concat(path)], middlewares, false), [validators,
                    routeHandler], false));
            }
        }
    };
}

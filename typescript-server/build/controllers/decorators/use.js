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
exports.use = use;
var enums_1 = require("../../utils/enums");
var reflectMetadata_1 = require("../../utils/reflectMetadata");
function use(middleware) {
    return function (target, key, _) {
        var middlewares = (0, reflectMetadata_1.getMeta)({ metadataKey: enums_1.MetadataKeys.middleware, target: target, key: key }) || [];
        (0, reflectMetadata_1.setMeta)({
            metadataKey: enums_1.MetadataKeys.middleware,
            metadataValue: __spreadArray(__spreadArray([], middlewares, true), [middleware], false),
            target: target,
            key: key,
        });
    };
}

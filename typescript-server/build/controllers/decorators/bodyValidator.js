"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = bodyValidator;
var enums_1 = require("../../utils/enums");
var reflectMetadata_1 = require("../../utils/reflectMetadata");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, _) {
        (0, reflectMetadata_1.setMeta)({
            metadataKey: enums_1.MetadataKeys.validator,
            metadataValue: keys,
            target: target,
            key: key,
        });
    };
}

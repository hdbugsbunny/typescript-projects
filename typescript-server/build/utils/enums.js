"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataKeys = exports.Methods = void 0;
var Methods;
(function (Methods) {
    Methods["get"] = "get";
    Methods["post"] = "post";
    Methods["put"] = "put";
    Methods["del"] = "delete";
    Methods["patch"] = "patch";
})(Methods || (exports.Methods = Methods = {}));
var MetadataKeys;
(function (MetadataKeys) {
    MetadataKeys["path"] = "path";
    MetadataKeys["method"] = "method";
    MetadataKeys["middleware"] = "middleware";
    MetadataKeys["validator"] = "validator";
})(MetadataKeys || (exports.MetadataKeys = MetadataKeys = {}));

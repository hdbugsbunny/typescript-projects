"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeta = exports.setMeta = void 0;
require("reflect-metadata");
var setMeta = function (metadata) {
    var metadataKey = metadata.metadataKey, metadataValue = metadata.metadataValue, target = metadata.target, key = metadata.key;
    Reflect.defineMetadata(metadataKey, metadataValue, target, key);
};
exports.setMeta = setMeta;
var getMeta = function (metadata) {
    var metadataKey = metadata.metadataKey, target = metadata.target, key = metadata.key;
    return Reflect.getMetadata(metadataKey, target, key);
};
exports.getMeta = getMeta;

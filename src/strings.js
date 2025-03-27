"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateString = exports.randomString = void 0;
var randomString = function (length) {
    if (length === void 0) { length = 8; }
    return Math.random()
        .toString(36)
        .substring(2, 2 + length);
};
exports.randomString = randomString;
var truncateString = function (str, length) {
    return str.length > length ? str.slice(0, length) + "..." : str;
};
exports.truncateString = truncateString;

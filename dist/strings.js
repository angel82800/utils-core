"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateString = exports.randomString = void 0;
const randomString = (length = 8) => Math.random()
    .toString(36)
    .substring(2, 2 + length);
exports.randomString = randomString;
const truncateString = (str, length) => str.length > length ? str.slice(0, length) + "..." : str;
exports.truncateString = truncateString;

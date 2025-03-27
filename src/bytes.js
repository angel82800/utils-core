"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBytes = void 0;
/**
 * Convert bytes to a human-readable format
 * @param bytes The number of bytes
 * @param decimals Number of decimal places
 * @returns A formatted string representing the byte size
 */
var formatBytes = function (bytes, decimals) {
    if (decimals === void 0) { decimals = 2; }
    if (bytes === 0)
        return "0 Bytes";
    var k = 1024;
    var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    var i = Math.floor(Math.log(bytes) / Math.log(k));
    return "".concat(parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)), " ").concat(sizes[i]);
};
exports.formatBytes = formatBytes;

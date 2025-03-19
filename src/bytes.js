"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatBytes = void 0;
/**
 * Convert bytes to a human-readable format
 * @param bytes The number of bytes
 * @param decimals Number of decimal places
 * @returns A formatted string representing the byte size
 */
const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0)
        return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${sizes[i]}`;
};
exports.formatBytes = formatBytes;

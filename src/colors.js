"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexToRgb = void 0;
/**
 * Convert a hex color code to RGB values
 * @param hex The hex color code (e.g., "#FFFFFF")
 * @returns An object with r, g, and b properties
 */
var hexToRgb = function (hex) {
    var bigint = parseInt(hex.slice(1), 16);
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
};
exports.hexToRgb = hexToRgb;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = void 0;
/**
 * Format a date to "YYYY-MM-DD"
 * @param date The date to format
 * @returns A formatted date string
 */
var formatDate = function (date) {
    var _a, _b;
    if (date === void 0) { date = new Date(); }
    return (_b = (_a = date === null || date === void 0 ? void 0 : date.toISOString()) === null || _a === void 0 ? void 0 : _a.split("T")) === null || _b === void 0 ? void 0 : _b[0];
};
exports.formatDate = formatDate;

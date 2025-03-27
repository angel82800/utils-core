"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimalFormating = void 0;
/**
 * Format a number into a decimal representation with specified formatting.
 *
 * @param num The number to format. Can be a number, string, or undefined.
 * @param isDecimal A flag to specify whether to force two decimal places. Default is false.
 * @returns A formatted string with the number, or an empty string if the input is invalid. (1000 => 1,000, 2023001 => 2,023,001)
 */
const getDecimalFormating = (num, isDecimal = false) => {
    if (!num || isNaN(Number(num))) {
        return "";
    }
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
        maximumFractionDigits: 2,
        minimumFractionDigits: isDecimal ? 2 : 0,
    }).format(Number(num));
};
exports.getDecimalFormating = getDecimalFormating;

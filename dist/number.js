"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberToCurrency = exports.convertHexToDec = exports.convertDecToHex = void 0;
const convertDecToHex = (num) => {
    return Number(num).toString(16);
};
exports.convertDecToHex = convertDecToHex;
const convertHexToDec = (str) => {
    return parseInt(str.toString(), 16);
};
exports.convertHexToDec = convertHexToDec;
const convertNumberToCurrency = (num, locales = "en-US", currency = "USD") => {
    return new Intl.NumberFormat(locales, {
        style: "currency",
        currency,
    }).format(num);
};
exports.convertNumberToCurrency = convertNumberToCurrency;

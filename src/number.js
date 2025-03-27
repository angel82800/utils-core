"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNumberToCurrency = exports.convertHexToDec = exports.convertDecToHex = void 0;
var convertDecToHex = function (num) {
    return Number(num).toString(16);
};
exports.convertDecToHex = convertDecToHex;
var convertHexToDec = function (str) {
    return parseInt(str.toString(), 16);
};
exports.convertHexToDec = convertHexToDec;
var convertNumberToCurrency = function (num, locales, currency) {
    if (locales === void 0) { locales = "en-US"; }
    if (currency === void 0) { currency = "USD"; }
    return new Intl.NumberFormat(locales, {
        style: "currency",
        currency: currency,
    }).format(num);
};
exports.convertNumberToCurrency = convertNumberToCurrency;

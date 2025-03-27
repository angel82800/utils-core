"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenAddress = exports.capitalizeWords = exports.capitalizeName = exports.capitalize = void 0;
/**
 * Capitalize string
 * @param value Ex: trump
 * @returns Ex: Trump
 */
var capitalize = function (s) {
    if (!s)
        return "";
    return s[0].toUpperCase() + s.slice(1);
};
exports.capitalize = capitalize;
/**
 * Capitalize first letters of name
 * @param value Ex: Barron Trump
 * @returns Ex: BT
 */
var capitalizeName = function (name) {
    var _a, _b, _c, _d;
    if (name === void 0) { name = ""; }
    var arr = name === null || name === void 0 ? void 0 : name.split(" ");
    return "".concat(((_b = (_a = arr[0]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || "").concat(((_d = (_c = arr[1]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.toUpperCase()) || "");
};
exports.capitalizeName = capitalizeName;
/**
 * Capitalize all words
 * @param value Ex: date_available, _
 * @returns Ex: Date Available
 */
var capitalizeWords = function (str, splitLetter) {
    if (str === void 0) { str = ""; }
    if (splitLetter === void 0) { splitLetter = " "; }
    try {
        var arr_1 = str === null || str === void 0 ? void 0 : str.split(splitLetter);
        var newStr_1 = "";
        arr_1 === null || arr_1 === void 0 ? void 0 : arr_1.forEach(function (s, idx) {
            newStr_1 += "".concat((0, exports.capitalize)(s));
            if (idx < (arr_1 === null || arr_1 === void 0 ? void 0 : arr_1.length) - 1)
                newStr_1 += " ";
        });
        return newStr_1;
    }
    catch (err) {
        return "";
    }
};
exports.capitalizeWords = capitalizeWords;
var shortenAddress = function (address) {
    if (!address)
        return "";
    return "".concat(address.slice(0, 5), "...").concat(address.slice(-5));
};
exports.shortenAddress = shortenAddress;

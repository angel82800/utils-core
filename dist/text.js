"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenAddress = exports.capitalizeWords = exports.capitalizeName = exports.capitalize = void 0;
/**
 * Capitalize string
 * @param value Ex: trump
 * @returns Ex: Trump
 */
const capitalize = (s) => {
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
const capitalizeName = (name = "") => {
    var _a, _b, _c, _d;
    const arr = name === null || name === void 0 ? void 0 : name.split(" ");
    return `${((_b = (_a = arr[0]) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.toUpperCase()) || ""}${((_d = (_c = arr[1]) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.toUpperCase()) || ""}`;
};
exports.capitalizeName = capitalizeName;
/**
 * Capitalize all words
 * @param value Ex: date_available, _
 * @returns Ex: Date Available
 */
const capitalizeWords = (str = "", splitLetter = " ") => {
    try {
        const arr = str === null || str === void 0 ? void 0 : str.split(splitLetter);
        let newStr = "";
        arr === null || arr === void 0 ? void 0 : arr.forEach((s, idx) => {
            newStr += `${(0, exports.capitalize)(s)}`;
            if (idx < (arr === null || arr === void 0 ? void 0 : arr.length) - 1)
                newStr += " ";
        });
        return newStr;
    }
    catch (err) {
        return "";
    }
};
exports.capitalizeWords = capitalizeWords;
const shortenAddress = (address) => {
    if (!address)
        return "";
    return `${address.slice(0, 5)}...${address.slice(-5)}`;
};
exports.shortenAddress = shortenAddress;

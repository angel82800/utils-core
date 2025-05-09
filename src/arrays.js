"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenArray = exports.shuffleArray = exports.deepUniqueArray = exports.uniqueArrayByKey = exports.uniqueArray = void 0;
/**
 * Remove duplicate values from an array
 * Useful when you need to ensure all elements are unique
 * @param arr The array to filter
 * @returns A new array with unique elements
 */
var uniqueArray = function (arr) { return __spreadArray([], new Set(arr), true); };
exports.uniqueArray = uniqueArray;
var uniqueArrayByKey = function (arr, key) {
    var seen = new Set();
    return arr.filter(function (item) {
        var value = item[key];
        if (seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });
};
exports.uniqueArrayByKey = uniqueArrayByKey;
var deepUniqueArray = function (arr, compareFn) {
    return arr.filter(function (item, index, self) {
        return (index ===
            self.findIndex(function (t) {
                return compareFn
                    ? compareFn(t, item)
                    : JSON.stringify(t) === JSON.stringify(item);
            }));
    });
};
exports.deepUniqueArray = deepUniqueArray;
var shuffleArray = function (arr) {
    return arr.sort(function () { return Math.random() - 0.5; });
};
exports.shuffleArray = shuffleArray;
/**
 * Flatten a nested array into a single-level array
 * Useful for handling deeply nested arrays
 * @param arr The array to flatten
 * @returns A single-level array
 */
var flattenArray = function (arr) { return arr.flat(Infinity); };
exports.flattenArray = flattenArray;

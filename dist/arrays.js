"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenArray = exports.shuffleArray = exports.deepUniqueArray = exports.uniqueArrayByKey = exports.uniqueArray = void 0;
/**
 * Remove duplicate values from an array
 * Useful when you need to ensure all elements are unique
 * @param arr The array to filter
 * @returns A new array with unique elements
 */
const uniqueArray = (arr) => [...new Set(arr)];
exports.uniqueArray = uniqueArray;
const uniqueArrayByKey = (arr, key) => {
    const seen = new Set();
    return arr.filter((item) => {
        const value = item[key];
        if (seen.has(value)) {
            return false;
        }
        seen.add(value);
        return true;
    });
};
exports.uniqueArrayByKey = uniqueArrayByKey;
const deepUniqueArray = (arr, compareFn) => {
    return arr.filter((item, index, self) => {
        return (index ===
            self.findIndex((t) => compareFn
                ? compareFn(t, item)
                : JSON.stringify(t) === JSON.stringify(item)));
    });
};
exports.deepUniqueArray = deepUniqueArray;
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
exports.shuffleArray = shuffleArray;
/**
 * Flatten a nested array into a single-level array
 * Useful for handling deeply nested arrays
 * @param arr The array to flatten
 * @returns A single-level array
 */
const flattenArray = (arr) => arr.flat(Infinity);
exports.flattenArray = flattenArray;

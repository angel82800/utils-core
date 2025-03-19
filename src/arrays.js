"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenArray = exports.shuffleArray = exports.uniqueArray = void 0;
/**
 * Remove duplicate values from an array
 * Useful when you need to ensure all elements are unique
 * @param arr The array to filter
 * @returns A new array with unique elements
 */
const uniqueArray = (arr) => [...new Set(arr)];
exports.uniqueArray = uniqueArray;
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

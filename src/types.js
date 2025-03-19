"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.isEmpty = exports.isNumber = exports.isString = exports.isFunction = exports.isArray = exports.isObject = void 0;
const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
exports.isObject = isObject;
const isArray = (val) => Array.isArray(val);
exports.isArray = isArray;
const isFunction = (val) => typeof val === "function";
exports.isFunction = isFunction;
const isString = (val) => typeof val === "string";
exports.isString = isString;
/**
 * Check if the tyoe of val is number
 * @param val The val to check
 * @returns True if the type of val is number, false otherwise
 */
const isNumber = (val) => typeof val === "number" && !isNaN(val);
exports.isNumber = isNumber;
/**
 * Check if an object or array is empty
 * Useful for checking if a variable contains any data or not
 * @param val The object or array to check
 * @returns True if empty, false otherwise
 */
const isEmpty = (val) => [Object, Array].includes((val || {}).constructor) &&
    !Object.entries(val || {}).length;
exports.isEmpty = isEmpty;
/**
 * Check if an object is empty
 * @param obj The object to check
 * @returns True if the object is empty, false otherwise
 */
const isEmptyObject = (obj) => Object.keys(obj).length === 0;
exports.isEmptyObject = isEmptyObject;

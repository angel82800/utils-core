"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.isEmpty = exports.isNumber = exports.isString = exports.isFunction = exports.isArray = exports.isObject = void 0;
var isObject = function (val) {
    return val && typeof val === "object" && !Array.isArray(val);
};
exports.isObject = isObject;
var isArray = function (val) { return Array.isArray(val); };
exports.isArray = isArray;
var isFunction = function (val) {
    return typeof val === "function";
};
exports.isFunction = isFunction;
var isString = function (val) { return typeof val === "string"; };
exports.isString = isString;
/**
 * Check if the tyoe of val is number
 * @param val The val to check
 * @returns True if the type of val is number, false otherwise
 */
var isNumber = function (val) {
    return typeof val === "number" && !isNaN(val);
};
exports.isNumber = isNumber;
/**
 * Check if an object or array is empty
 * Useful for checking if a variable contains any data or not
 * @param val The object or array to check
 * @returns True if empty, false otherwise
 */
var isEmpty = function (val) {
    return [Object, Array].includes((val || {}).constructor) &&
        !Object.entries(val || {}).length;
};
exports.isEmpty = isEmpty;
/**
 * Check if an object is empty
 * @param obj The object to check
 * @returns True if the object is empty, false otherwise
 */
var isEmptyObject = function (obj) {
    return Object.keys(obj).length === 0;
};
exports.isEmptyObject = isEmptyObject;

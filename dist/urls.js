"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepObjectToQueryString = exports.objectToQueryString = void 0;
/**
 * Convert an object to a query string
 * @param obj The object to convert
 * @returns A query string
 */
const objectToQueryString = (obj) => Object.entries(obj)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join("&");
exports.objectToQueryString = objectToQueryString;
/**
 * Convert a nested object to a deep query string
 * @param obj The object to convert
 * @returns A query string with nested parameters
 */
const deepObjectToQueryString = (obj, prefix = "") => Object.entries(obj)
    .map(([key, value]) => value && typeof value === "object"
    ? (0, exports.deepObjectToQueryString)(value, `${prefix}${key}.`)
    : `${encodeURIComponent(prefix + key)}=${encodeURIComponent(value)}`)
    .join("&");
exports.deepObjectToQueryString = deepObjectToQueryString;

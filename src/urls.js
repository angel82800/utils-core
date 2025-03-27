"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepObjectToQueryString = exports.objectToQueryString = void 0;
/**
 * Convert an object to a query string
 * @param obj The object to convert
 * @returns A query string
 */
var objectToQueryString = function (obj) {
    return Object.entries(obj)
        .map(function (_a) {
        var key = _a[0], val = _a[1];
        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(val));
    })
        .join("&");
};
exports.objectToQueryString = objectToQueryString;
/**
 * Convert a nested object to a deep query string
 * @param obj The object to convert
 * @returns A query string with nested parameters
 */
var deepObjectToQueryString = function (obj, prefix) {
    if (prefix === void 0) { prefix = ""; }
    return Object.entries(obj)
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return value && typeof value === "object"
            ? (0, exports.deepObjectToQueryString)(value, "".concat(prefix).concat(key, "."))
            : "".concat(encodeURIComponent(prefix + key), "=").concat(encodeURIComponent(value));
    })
        .join("&");
};
exports.deepObjectToQueryString = deepObjectToQueryString;

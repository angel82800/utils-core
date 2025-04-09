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
exports.noop = exports.safeCallT = exports.safeCall = void 0;
/**
 * Safely calls a function and falls back to alternative functions if errors occur
 * @param fn The primary function to call
 * @param fallbacks Additional fallback functions to try if the primary fails
 * @returns The result of the first successful function call
 * @throws Error if all functions fail
 *
 * @example
 * safeCall(
 *   () => mightThrow(),
 *   () => fallback1(),
 *   () => fallback2()
 * );
 */
var safeCall = function (fn) {
    var fallbacks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fallbacks[_i - 1] = arguments[_i];
    }
    try {
        return fn();
    }
    catch (e) {
        if (fallbacks.length === 0) {
            throw e;
        }
        var nextFn = fallbacks[0], remainingFns = fallbacks.slice(1);
        return exports.safeCall.apply(void 0, __spreadArray([nextFn], remainingFns, false));
    }
};
exports.safeCall = safeCall;
/**
 * Type-safe version of safeCall with explicit return type
 * @param fn The primary function to call
 * @param fallbacks Additional fallback functions to try if the primary fails
 * @returns The result of the first successful function call
 * @throws Error if all functions fail
 *
 * @example
 * safeCallT<number>(
 *   () => mightThrow(),
 *   () => 42,
 *   () => someOtherFallback()
 * );
 */
var safeCallT = function (fn) {
    var fallbacks = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fallbacks[_i - 1] = arguments[_i];
    }
    return exports.safeCall.apply(void 0, __spreadArray([fn], fallbacks, false));
};
exports.safeCallT = safeCallT;
/**
 * A no-operation function that does nothing.
 * Can be used as a placeholder for callback functions or event handlers.
 *
 * @example
 * const callback = noop; // Assign as placeholder
 * button.onClick = noop; // Use as event handler placeholder
 */
var noop = function () { };
exports.noop = noop;

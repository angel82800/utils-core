"use strict";
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
const safeCall = (fn, ...fallbacks) => {
    try {
        return fn();
    }
    catch (e) {
        if (fallbacks.length === 0) {
            throw e;
        }
        const [nextFn, ...remainingFns] = fallbacks;
        return (0, exports.safeCall)(nextFn, ...remainingFns);
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
const safeCallT = (fn, ...fallbacks) => (0, exports.safeCall)(fn, ...fallbacks);
exports.safeCallT = safeCallT;
/**
 * A no-operation function that does nothing.
 * Can be used as a placeholder for callback functions or event handlers.
 *
 * @example
 * const callback = noop; // Assign as placeholder
 * button.onClick = noop; // Use as event handler placeholder
 */
const noop = () => { };
exports.noop = noop;

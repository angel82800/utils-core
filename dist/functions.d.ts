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
export declare const safeCall: <T>(fn: () => T, ...fallbacks: Array<() => T>) => T;
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
export declare const safeCallT: <T>(fn: () => T, ...fallbacks: Array<() => T>) => T;
/**
 * A no-operation function that does nothing.
 * Can be used as a placeholder for callback functions or event handlers.
 *
 * @example
 * const callback = noop; // Assign as placeholder
 * button.onClick = noop; // Use as event handler placeholder
 */
export declare const noop: () => void;

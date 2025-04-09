/**
 * Remove duplicate values from an array
 * Useful when you need to ensure all elements are unique
 * @param arr The array to filter
 * @returns A new array with unique elements
 */
export declare const uniqueArray: <T>(arr: T[]) => T[];
export declare const uniqueArrayByKey: <T>(arr: T[], key: keyof T) => T[];
export declare const deepUniqueArray: <T>(arr: T[], compareFn?: (a: T, b: T) => boolean) => T[];
export declare const shuffleArray: <T>(arr: T[]) => T[];
/**
 * Flatten a nested array into a single-level array
 * Useful for handling deeply nested arrays
 * @param arr The array to flatten
 * @returns A single-level array
 */
export declare const flattenArray: <T>(arr: any[]) => T[];

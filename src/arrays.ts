/**
 * Remove duplicate values from an array
 * Useful when you need to ensure all elements are unique
 * @param arr The array to filter
 * @returns A new array with unique elements
 */
export const uniqueArray = <T>(arr: T[]): T[] => [...new Set(arr)];
export const shuffleArray = <T>(arr: T[]): T[] =>
  arr.sort(() => Math.random() - 0.5);

/**
 * Flatten a nested array into a single-level array
 * Useful for handling deeply nested arrays
 * @param arr The array to flatten
 * @returns A single-level array
 */
export const flattenArray = <T>(arr: any[]): T[] => arr.flat(Infinity);

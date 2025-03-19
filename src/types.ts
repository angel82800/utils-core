export const isObject = (val: any): val is object =>
  val && typeof val === "object" && !Array.isArray(val);
export const isArray = (val: any): val is any[] => Array.isArray(val);
export const isFunction = (val: any): val is Function =>
  typeof val === "function";
export const isString = (val: any): val is string => typeof val === "string";

/**
 * Check if the tyoe of val is number
 * @param val The val to check
 * @returns True if the type of val is number, false otherwise
 */
export const isNumber = (val: any): val is number =>
  typeof val === "number" && !isNaN(val);

/**
 * Check if an object or array is empty
 * Useful for checking if a variable contains any data or not
 * @param val The object or array to check
 * @returns True if empty, false otherwise
 */
export const isEmpty = (val: any): boolean =>
  [Object, Array].includes((val || {}).constructor) &&
  !Object.entries(val || {}).length;

/**
 * Check if an object is empty
 * @param obj The object to check
 * @returns True if the object is empty, false otherwise
 */
export const isEmptyObject = (obj: object): boolean =>
  Object.keys(obj).length === 0;

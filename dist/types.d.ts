export declare const isObject: (val: any) => val is object;
export declare const isArray: (val: any) => val is any[];
export declare const isFunction: (val: any) => val is Function;
export declare const isString: (val: any) => val is string;
/**
 * Check if the tyoe of val is number
 * @param val The val to check
 * @returns True if the type of val is number, false otherwise
 */
export declare const isNumber: (val: any) => val is number;
/**
 * Check if an object or array is empty
 * Useful for checking if a variable contains any data or not
 * @param val The object or array to check
 * @returns True if empty, false otherwise
 */
export declare const isEmpty: (val: any) => boolean;
/**
 * Check if an object is empty
 * @param obj The object to check
 * @returns True if the object is empty, false otherwise
 */
export declare const isEmptyObject: (obj: object) => boolean;

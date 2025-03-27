/**
 * Convert an object to a query string
 * @param obj The object to convert
 * @returns A query string
 */
export declare const objectToQueryString: (obj: Record<string, any>) => string;
/**
 * Convert a nested object to a deep query string
 * @param obj The object to convert
 * @returns A query string with nested parameters
 */
export declare const deepObjectToQueryString: (obj: any, prefix?: string) => string;

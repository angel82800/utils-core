/**
 * Convert an object to a query string
 * @param obj The object to convert
 * @returns A query string
 */
export const objectToQueryString = (obj: Record<string, any>): string =>
  Object.entries(obj)
    .map(
      ([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
    )
    .join("&");

/**
 * Convert a nested object to a deep query string
 * @param obj The object to convert
 * @returns A query string with nested parameters
 */
export const deepObjectToQueryString = (
  obj: any,
  prefix: string = ""
): string =>
  Object.entries(obj)
    .map(([key, value]: any) =>
      value && typeof value === "object"
        ? deepObjectToQueryString(value, `${prefix}${key}.`)
        : `${encodeURIComponent(prefix + key)}=${encodeURIComponent(value)}`
    )
    .join("&");

/**
 * Format a date to "YYYY-MM-DD"
 * @param date The date to format
 * @returns A formatted date string
 */
export const formatDate = (date: Date = new Date()): string =>
  date?.toISOString()?.split("T")?.[0];

/**
 * Convert a hex color code to RGB values
 * @param hex The hex color code (e.g., "#FFFFFF")
 * @returns An object with r, g, and b properties
 */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const bigint = parseInt(hex.slice(1), 16);
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 };
};

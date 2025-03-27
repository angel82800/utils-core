/**
 * Get the extension of a file from its name
 * @param filename The name of the file
 * @returns The file extension
 */
export const getFileExtension = (filename: string): string =>
  filename?.split(".")?.pop() || "";

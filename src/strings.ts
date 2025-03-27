export const randomString = (length = 8): string =>
  Math.random()
    .toString(36)
    .substring(2, 2 + length);

export const truncateString = (str: string, length: number): string =>
  str.length > length ? str.slice(0, length) + "..." : str;

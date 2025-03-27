/**
 * Parse json with validation
 * @param value Ex: "{'a': 'b'}"
 * @returns Ex: {'a': 'b'}
 */
export const parseJSON = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
};

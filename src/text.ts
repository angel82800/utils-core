/**
 * Capitalize string
 * @param value Ex: trump
 * @returns Ex: Trump
 */
export const capitalize = (s: string | undefined) => {
  if (!s) return "";
  return s[0].toUpperCase() + s.slice(1);
};

/**
 * Capitalize first letters of name
 * @param value Ex: Barron Trump
 * @returns Ex: BT
 */
export const capitalizeName = (name: string = "") => {
  const arr = name?.split(" ");
  return `${arr[0]?.[0]?.toUpperCase() || ""}${
    arr[1]?.[0]?.toUpperCase() || ""
  }`;
};

/**
 * Capitalize all words
 * @param value Ex: date_available, _
 * @returns Ex: Date Available
 */
export const capitalizeWords = (
  str: string = "",
  splitLetter: string = " "
) => {
  try {
    const arr = str?.split(splitLetter);
    let newStr = "";
    arr?.forEach((s, idx) => {
      newStr += `${capitalize(s)}`;
      if (idx < arr?.length - 1) newStr += " ";
    });
    return newStr;
  } catch (err) {
    return "";
  }
};

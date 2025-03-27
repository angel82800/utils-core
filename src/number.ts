export const convertDecToHex = (num: number) => {
  return Number(num).toString(16);
};

export const convertHexToDec = (str: string | number) => {
  return parseInt(str.toString(), 16);
};

export const convertNumberToCurrency = (
  num: number,
  locales = "en-US",
  currency = "USD"
) => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency,
  }).format(num);
};

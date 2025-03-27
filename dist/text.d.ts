/**
 * Capitalize string
 * @param value Ex: trump
 * @returns Ex: Trump
 */
export declare const capitalize: (s: string | undefined) => string;
/**
 * Capitalize first letters of name
 * @param value Ex: Barron Trump
 * @returns Ex: BT
 */
export declare const capitalizeName: (name?: string) => string;
/**
 * Capitalize all words
 * @param value Ex: date_available, _
 * @returns Ex: Date Available
 */
export declare const capitalizeWords: (str?: string, splitLetter?: string) => string;
export declare const shortenAddress: (address: string | undefined) => string;

/**
 * Copy a given text to the clipboard
 * Useful for adding a "Copy" button for user-friendly interaction
 * @param text The text to copy to the clipboard
 * @returns A promise indicating the success of the operation
 */
export declare const copyToClipboard: (text: string) => Promise<void>;
/**
 * Scroll the page smoothly to the top
 * Useful for providing a "back to top" functionality
 * @returns void
 */
export declare const scrollToTop: () => void;

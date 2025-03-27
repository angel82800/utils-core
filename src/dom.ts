/**
 * Copy a given text to the clipboard
 * Useful for adding a "Copy" button for user-friendly interaction
 * @param text The text to copy to the clipboard
 * @returns A promise indicating the success of the operation
 */
export const copyToClipboard = async (text: string): Promise<void> => {
  await navigator.clipboard.writeText(text);
};

/**
 * Scroll the page smoothly to the top
 * Useful for providing a "back to top" functionality
 * @returns void
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

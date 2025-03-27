"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToTop = exports.copyToClipboard = void 0;
/**
 * Copy a given text to the clipboard
 * Useful for adding a "Copy" button for user-friendly interaction
 * @param text The text to copy to the clipboard
 * @returns A promise indicating the success of the operation
 */
const copyToClipboard = async (text) => {
    await navigator.clipboard.writeText(text);
};
exports.copyToClipboard = copyToClipboard;
/**
 * Scroll the page smoothly to the top
 * Useful for providing a "back to top" functionality
 * @returns void
 */
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
exports.scrollToTop = scrollToTop;

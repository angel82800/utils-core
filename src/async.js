"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
/**
 * Delay execution for a given number of milliseconds
 * @param ms Time to wait (in ms)
 * @returns A promise that resolves after the delay
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
exports.sleep = sleep;

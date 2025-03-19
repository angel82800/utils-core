/**
 * Delay execution for a given number of milliseconds
 * @param ms Time to wait (in ms)
 * @returns A promise that resolves after the delay
 */
export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

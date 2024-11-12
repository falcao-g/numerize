/**
 * @module
 *
 * This module provides functions to parse strings to numbers.
 *
 * @example
 * ```ts
 * import { numerize } from "@falcao/eh-par";
 * const userMoney = 1000;
 * const userInput = "10%";
 * console.log(numerize(userInput, userMoney)); // 100
 * ```
 */
/**
 * Adds new words to the dictionary
 * @param {Object} newWords
 * @example addWords({ quarter: 25}) // { all: 100, half: 50, tudo: 100, metade: 50, todo: 100, mitad: 50, quarter: 25 }
 * @returns - void
 */
export declare function addWords(newWords: Object): void;
/**
 * Adds new suffixes to the dictionary
 * @param {Object} newSuffixes
 * @example addWords({ c: 100}) // { k: 1000, m: 1000000, b: 1000000000, c: 100 }
 * @returns - void
 */
export declare function addSuffixes(newSuffixes: Object): void;
/**
 * Parses a string to an integer
 * @param {string} string
 * @param {number} total - default 0
 * @example numerize('10%', 1000) // 100
 * @example numerize('1k', 2) // 1000
 * @returns {number}
 */
export declare function numerize(string: string, total?: number): number;
/**
 * Parses a string to an float
 * @param {string} string
 * @param {number} total - default 0
 * @param {string} round - default "no"
 * @example numerize('10%', 1000) // 100
 * @example numerizef("33%", 2001, "no") // 660.33
 * @example numerizef("33%", 2001, "round") // 660
 * @example numerizef("33%", 2001, "up") // 661
 * @example numerizef("33%", 2001, "down") // 660
 * @returns {number}
 */
export declare function numerizef(string: string, total?: number, round?: string): number;

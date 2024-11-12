/**
 *
 * @param {Object} newWords
 * @description Adds new words to the dictionary
 * @example addWords({ quarter: 25}) // { all: 100, half: 50, tudo: 100, metade: 50, todo: 100, mitad: 50, quarter: 25 }
 */
declare function addWords(newWords: Object): void;
/**
 *
 * @param {Object} newSuffixes
 * @description Adds new suffixes to the dictionary
 * @example addWords({ c: 100}) // { k: 1000, m: 1000000, b: 1000000000, c: 100 }
 */
declare function addSuffixes(newSuffixes: Object): void;
/**
 *
 * @param {string} string
 * @param {number} total - default 0
 * @description Parses a string to an integer
 * @example numerize('10%', 1000) // 100
 * @example numerize('1k', 2) // 1000
 * @returns {number}
 */
declare function numerize(string: string, total?: number): number;
/**
 *
 * @param {string} string
 * @param {number} total - default 0
 * @param {string} round - default "no"
 * @description Parses a string to an float
 * @example numerize('10%', 1000) // 100
 * @example numerizef("33%", 2001, "no") // 660.33
 * @example numerizef("33%", 2001, "round") // 660
 * @example numerizef("33%", 2001, "up") // 661
 * @example numerizef("33%", 2001, "down") // 660
 * @returns {number}
 */
declare function numerizef(string: string, total?: number, round?: string): number;
declare const _default: {
    addWords: typeof addWords;
    addSuffixes: typeof addSuffixes;
    numerize: typeof numerize;
    numerizef: typeof numerizef;
};
export default _default;

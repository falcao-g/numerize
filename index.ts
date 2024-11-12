/**
 * @description Words that correspond to a percentage
 * @example all = 100%
 */
const words = {
	all: 100,
	half: 50,
	tudo: 100,
	metade: 50,
	todo: 100,
	mitad: 50,
}

/**
 * @description Suffixes for numbers
 * @example 1k = 1000
 */
const suffixes = {
	k: 1000,
	m: 1000000,
	b: 1000000000,
}

/**
 *
 * @param {Object} newWords
 * @description Adds new words to the dictionary
 * @example addWords({ quarter: 25}) // { all: 100, half: 50, tudo: 100, metade: 50, todo: 100, mitad: 50, quarter: 25 }
 */
function addWords(newWords: Object) {
	Object.assign(words, newWords)
}

/**
 *
 * @param {Object} newSuffixes
 * @description Adds new suffixes to the dictionary
 * @example addWords({ c: 100}) // { k: 1000, m: 1000000, b: 1000000000, c: 100 }
 */
function addSuffixes(newSuffixes: Object) {
	Object.assign(suffixes, newSuffixes)
}

/**
 *
 * @param {string} string
 * @param {number} total - default 0
 * @description Parses a string to an integer
 * @example numerize('10%', 1000) // 100
 * @example numerize('1k', 2) // 1000
 * @returns {number}
 */
function numerize(string: string, total: number = 0): number {
	string = string.toLowerCase()
	string = string.replace(/,/g, "")
	string = string.replace(/\./g, "")
	var new_value = parseInt(string)

	if (string in words) {
		new_value = (words[string] * total) / 100
	} else if (string.slice(-1) in suffixes) {
		new_value = parseInt(string.slice(0, -1)) * suffixes[string.slice(-1)]
	} else if (string.slice(-1) == "%") {
		new_value = (parseInt(string.slice(0, -1)) * total) / 100
	}

	if (new_value <= 0 || isNaN(new_value)) {
		throw Error("Invalid value!")
	} else {
		return new_value
	}
}

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
function numerizef(string: string, total: number = 0, round: string = "no"): number {
	string = string.toLowerCase()
	var new_value = Number(string)

	if (string in words) {
		new_value = (words[string] * total) / 100
	} else if (string.slice(-1) in suffixes) {
		new_value = Number(string.slice(0, -1)) * suffixes[string.slice(-1)]
	} else if (string.slice(-1) == "%") {
		new_value = (Number(string.slice(0, -1)) * Number(total)) / 100
	}

	if (new_value <= 0 || isNaN(new_value)) {
		throw Error("Invalid value!")
	} else {
		if (round == "up") {
			return Math.ceil(Number(new_value))
		} else if (round == "down") {
			return Math.floor(Number(new_value))
		} else if (round == "round") {
			return Math.round(Number(new_value))
		}
		return new_value
	}
}

export default {
	addWords,
	addSuffixes,
	numerize,
	numerizef,
}

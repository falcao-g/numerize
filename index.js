const words = {
	all: 100,
	half: 50,
	tudo: 100,
	metade: 50,
	todo: 100,
	mitad: 50,
}

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
function addWords(newWords) {
	Object.assign(words, newWords)
}

/**
 *
 * @param {Object} newWords
 * @description Adds new suffixes to the dictionary
 * @example addWords({ c: 100}) // { k: 1000, m: 1000000, b: 1000000000, c: 100 }
 */
function addSuffixes(newSuffixes) {
	Object.assign(suffixes, newSuffixes)
}

/**
 *
 * @param {string} string
 * @param {integer} total - default 0
 * @description Parses a string to an integer
 * @example numerize('10%', 1000) // 100
 * @example numerize('1k', 2) // 1000
 * @returns {integer}
 */
function numerize(string, total = 0) {
	string = string.toLowerCase()
	string = string.replace(/,/g, "")
	string = string.replace(/\./g, "")
	var new_value = parseInt(string)

	if (string in words) {
		new_value = (words[string] * total) / 100
	} else if (string.slice(-1) in suffixes) {
		new_value = parseInt(string.slice(0, -1)) * suffixes[string.slice(-1)]
	} else if (string.slice(-1) == "%") {
		new_value = (parseInt(string.slice(0, -1)) * parseInt(total)) / 100
	}

	if (parseInt(new_value) <= 0 || isNaN(parseInt(new_value))) {
		throw Error("Invalid value!")
	} else {
		return parseInt(new_value)
	}
}

/**
 *
 * @param {string} string
 * @param {integer} total - default 0
 * @param {boolean} round - default "no"
 * @description Parses a string to an float
 * @example numerize('10%', 1000) // 100
 * @example console.log(numerizef("33%", 2001, "no")) // 660.33
 * @example console.log(numerizef("33%", 2001, "round")) // 660
 * @example console.log(numerizef("33%", 2001, "up")) // 661
 * @example console.log(numerizef("33%", 2001, "down")) // 660
 * @returns {float}
 */
function numerizef(string, total = 0, round = "no") {
	string = string.toLowerCase()
	var new_value = Number(string)

	if (string in words) {
		new_value = (words[string] * total) / 100
	} else if (string.slice(-1) in suffixes) {
		new_value = Number(string.slice(0, -1)) * suffixes[string.slice(-1)]
	} else if (string.slice(-1) == "%") {
		new_value = (Number(string.slice(0, -1)) * Number(total)) / 100
	}

	if (Number(new_value) <= 0 || isNaN(Number(new_value))) {
		throw Error("Invalid value!")
	} else {
		if (round == "up") {
			return Math.ceil(Number(new_value))
		} else if (round == "down") {
			return Math.floor(Number(new_value))
		} else if (round == "round") {
			return Math.round(Number(new_value))
		}
		return Number(new_value)
	}
}

export default {
	addWords,
	addSuffixes,
	numerize,
	numerizef,
}

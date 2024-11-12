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
 * @example specialArg('10%', 1000) // 100
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
		new_value = parseInt((parseInt(string.slice(0, -1)) * parseInt(total)) / 100)
	}

	if (parseInt(new_value) <= 0 || isNaN(parseInt(new_value))) {
		throw Error("Invalid value!")
	} else {
		return parseInt(new_value)
	}
}

export default {
	addWords,
	addSuffixes,
	numerize,
}

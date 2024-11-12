<h1 align="center"> NUMERIZE </h1>

> **Numerize is a very useful package that converts words to numbers**

<p align="center">
    	<a href="https://www.npmjs.com/package/numerize"><img src="https://img.shields.io/npm/v/numerize.svg?maxAge=3600" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/numerize"><img src="https://img.shields.io/npm/dt/numerize.svg?maxAge=3600" alt="npm downloads" /></a>
		<a href="https://jsr.io/@falcao/numerize"><img src="https://jsr.io/badges/@falcao/numerize" alt="jsr version" /></a>
		<a href="https://jsr.io/@falcao/numerize"><img src="https://jsr.io/badges/@falcao/numerize/score" alt="jsr score" /></a>
        <a title="Stars" href="https://github.com/falcao-g/falbot">
        <img src="https://img.shields.io/github/stars/falcao-g/numerize" alt="Stars">
    </a> 
</p>

## **✨ Why Numerize?**

- Easy to use & complete.
- Extremely useful to game-related projects.
- Customizable.
- Comes with 0 dependencies.

## **⚙️ Installation**

```bash
npm i numerize
```

or

```bash
deno add jsr:@falcao/numerize
```

## **📚 Usage**

Numerize is as easy to use as the following examples:

```js
const { numerize } = require("numerize")

console.log(numerize("10%", 100)) // 10
console.log(numerize("1m")) // 1000000
console.log(numerize("half", 1000)) // 500
console.log(numerize("all", 1000)) // 1000
console.log(numerize("1.000")) // 1000
```

Additionally, you can use the `numerizef` function if you want to return the number as a float:

```js
const { numerizef } = require("numerize")

console.log(numerizef("33%", 2001, "no")) // 660.33
console.log(numerizef("33%", 2001, "round")) // 660
console.log(numerizef("33%", 2001, "up")) // 661
console.log(numerizef("33%", 2001, "down")) // 660
```

This is very useful when reading inputs from users in a game, like a discord bot for example, when you want to ask the user how much money they want to spend, they can answer a number, a percentage, "all", "half", 1m, 1k, etc.

You can also add custom words and suffixes to the numerize function:

```js
const { numerize, addWords, addSuffixes } = require("numerize")

addWords({
	quarter: 25,
	third: 33,
})

addSuffixes({
	c: 100,
	d: 12,
})

console.log(numerize("quarter", 100)) // 25
console.log(numerize("third", 100)) // 33
console.log(numerize("1c")) // 100
console.log(numerize("1d")) // 12
```

//https://www.codewars.com/kata/56541980fa08ab47a0000040

// DESCRIPTION:
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"




//So we want to be able to return a count of the letters not in the range a to m, and return that number / total number of letters in the string
//we could use a string of letters from a to m, and use includes() to check if each letter of the s argument is in fact in that range of a to m.
//We'd also need a way to count, I'm thinking filter; pass to filter an array version of the string using split(), then filter the bad letters, then return a template literal `${badLetters.length}/${s.length}`

function printerError(s) {
	let badLetters = s.split('').filter(letter=>!'abcdefghijklm'.includes(letter))
	return `${badLetters.length}/${s.length}`
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))


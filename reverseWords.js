//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
// 	return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ')
// }
// console.log(reverseWords('double  spaced  words'))

//Same as best practice however I could have formatted my code to be more readable

function reverseWords(str) {
	return str.split(' ').map(
		word=>word.split('').reverse().join('')
	).join(' ')
}
console.log(reverseWords('double  spaced  words'))
//Like this, now you should be able to see we split the intial string into an array of words
	//then split those words each into an array so we could call the reverse method on them and then join them back into words
//And join those words back into a string
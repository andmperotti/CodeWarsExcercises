//https://www.codewars.com/kata/529eef7a9194e0cbc1000255

//Param:two strings, no letters are case sensitive
//Return: boolean, the result if the first argument and second argument are anagram of each other, again case insensitive
//Examples:foefet, toffee; true, Buckethead, DeathCubeK; true, dumble,bumble; false, ound, round; false
//pseudo code

// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function(test, original) {
	return test.toLowerCase().split('').sort().join()===original.toLowerCase().split('').sort().join()
};

//I'm thinking you could sort() each argument after turning them into arrays using split(''), and compare their lowercase versions to each other, that way we can check for equality after turning the elements of both arguments to lower case and put them in the same order.
//Since arrays are objects and checking for equality of two array objects is different because reference objects then we'll have to turn each back into a string to check for equality
console.log(isAnagram('food', 'doof'))


//This worked and best practice used the same methodology, however they used 2 variables to represent the outcomes of the methods on the strings and then compared the 2 variables, more lines of code but more understndable when reading.

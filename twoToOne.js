//https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// DESCRIPTION:
// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



// function longest(s1, s2) {
// 	//I'm thinking of concatenating both strings together
// 	let combined = s1+s2
// 	//then changing the string into an array so we can use sort()
// 	let newArr = combined.split('').sort()
// 	//then turn the array into a set to remove duplicate letters
// 	let newSet = new Set(newArr)
// 	//then turn it back into a string for the return, by changing the set back into an array, and then using the join method to create a string out of the array elements
// 	return Array.from(newSet).join('')
// }
// console.log(longest('aretheyhere', 'yestheyarehere'))

//Best practice answer actually concatenated the arguments together in the new Set argument area, which would have saved me some lines of code.
//Also it used the spread syntax "..." to make an array from the sets contents
//here I tried to combine what I saw very quickly when the best practice page loaded and to finish

function longest(s1, s2){
	return [...new Set(s1+s2)].sort().join('')
}
console.log(longest('aretheyhere', 'yestheyarehere'))

//will add this challenge to my Anki deck for future studying

//https://www.codewars.com/kata/58b8c94b7df3f116eb00005b

// DESCRIPTION:
// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Example
// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string


function reverseLetter(str) {
	//First we'll split() to make an array, for a number of reasons:
	//reverse() to reverse the order of array elements
	//filter() invoked on the array so we can remove the non latin letter elements
	//join() to create a string
	//return
	return str.split('').reverse().filter(ele=>'abcdefghijklmnopqrstuvwxyz'.includes(ele)).join('')
}
console.log(reverseLetter('ultr43o?n'))


//best practice used replace() with a regex, I feel like that's cheating myself from what's actually needed at a logic level so will stick with the above code.
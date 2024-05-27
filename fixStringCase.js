//https://www.codewars.com/kata/5b180e9fedaa564a7000009a

// DESCRIPTION:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.






//argument will be a string consisting of a mixture of lower and upper case letters
//output will be either a string of only lowercase or only uppercase letters, depending on which case had the higher occurence in the string, if they were equal then the output will consist of lowercase letters
//example: "bOb"=> "bob", "BoB"=>"BOB"

function solve(s){
	//we'll have to iterate somehow and count the occurence of at least upper or lower case letters in the string and then return a version using .toLowerCase() or .toUpperCase()
	//we could split the argument into an array and then compare the output from running two filter methods on that split array using the length property on each to find which case has more occurences, else if the opposite is true then change it to that case, else as in if they're equal return the lowercase of the string
	let splitArray = s.split('')
	if(splitArray.filter(e=>e===e.toLowerCase()).length>splitArray.filter(e=>e===e.toUpperCase()).length){
		return s.toLowerCase()
	}else if(splitArray.filter(e=>e===e.toLowerCase()).length<splitArray.filter(e=>e===e.toUpperCase()).length){ 
		return s.toUpperCase()
	}else{
		return s.toLowerCase()
	}
}
console.log(solve('bOOOb'))

//my code worked...
//best practice used 2 temp variables to signify lowercase letters and uppercase letters, then iterated over the string and incremented the correct temp variable for the case of each iterated letter, then used a ternary operator after the iteration was all finished to return either an uppercase version of the string argument or a lowercase version. Their code is easier to understand than mine.
//second best practice answer used a similar approach to mine, where they created two variables and bound to them a value output from running filter on a split version of the string argument then like the fist best practice answer used a ternary to return either an uppercase version or lowercase version of the string argument.
//I most definitely need to try to use ternary more than I do and think about the readability of my code. 
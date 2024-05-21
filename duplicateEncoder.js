//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// DESCRIPTION:
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!



//arguemnt is a string of lower and uppercase letters
//output is a string made up of ('s and )'s that replace characters in the string, ( is for characters that appeared only once and ) is for characters that appeared more than once.
//examples: 'andrew' => '(((((', 'bob'=> ')()'

function duplicateEncode(word){
	//change argument to have all lowercase letters so we can check for equality properly later
	word=word.toLowerCase()
	//create a temporary variable that will hold the eventual resulting string
	let result = ''
	//we'll iterate over the letters in the string
	for(let i = 0; i<word.length; i++){
		//using a comparison of indexOf and lastIndexOf we'll check whether each letter in the string has multiple occurences, and therefore insert a ( or ) into our new string
		if(word.indexOf(word.charAt(i))!==word.lastIndexOf(word[i])){
			result+=`)`
		}else{ //if only one occurence of value in string
			result+=`(`
		}
	}
	//return temp variable string
	return result
}
console.log(duplicateEncode('bob'))

//my code worked, however I didn't understand what it meant for me to do with assertion messages...
//best practice answer was very declarative as I used a super imperative approach, they chaines all their methods to a return statement pointing at the argument:
// function duplicateEncode(word){
//   return word
//     .toLowerCase()
//     .split('')
//     .map( function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }
//they converted word to lower case, then created an array by using split(), then they called a function on each of the elements in that array by using the map function which build a new array, that callback funcction used each value it's index and the array it was in to then return either ( or ) depending on if the first index of the value was == the last index of the value in the array and then after it iterated over all the elements of the spit array it join()'d them into a string and that's what was returned. So we did mostly the same.
//I need to use ternary more often but that would go against using imperative as a means to solve and explain my thought process to these. Maybe I'll write two versions going forward.
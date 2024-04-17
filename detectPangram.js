//https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// DESCRIPTION:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//We need to check if each letter in the alphabet is used in the argument string, so we'll need to iterate over a temp variable which holds each letter of the alphabet and check if the string uses each letter using stringArgument.includes(), and to maintain case we'll need to convert the argument to lowercase and use lowercase variants of letters in our temp variable.
//By using a temp variable which we'll iterate over and check its contents to base our functions result we can ignore symbols/non alphabetic characters that are in the argument string

function isPangram(string){
	//alphabet variable
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
	//for loop that iterates over temp variable, and checks if each is inside a lowercase variant of the argument
	for(let i = 0; i<alphabet.length; i++){
		if(!string.toLowerCase().includes(alphabet[i])){
			return false
		}
	}
	//when the for loop has finished iterating and not triggered the false above then all elements of temp variable have been found thus a pangram and we'll return true
	return true
}
console.log(isPangram('"The quick brown fox jumps over the lazy dog."'))



//looking at best practice answers my solution isn't even listed. Most answer's converted their temp variable which held the alphabet in a string into an array and used every() which used a function that checked if each letter was inside th argument by checking its index != -1. 
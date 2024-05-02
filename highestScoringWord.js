//https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//argument is a string of words, all letters will be lowercase
//output would be the highest scoring word in the string, where points of the letters accumulated represents the score of the word, letters get their values ascending value a=1 b=2 etc
//an example of the score of one word would be abad which is 8 points


function high(x){
	//break x argument into an array of words using split(' ')
	let splitWords = x.split(' ')
	//create an array that holds the summed values from each word by:
		//by using map we can iterate over the words, then using another split creating sub arrays of the words (letter arrays) and use reduce on those arrays to accumulate a value by:
				//convert each letter toLower and use charCodeAt(0) or codePointAt(0) on it and subtract 96 from it (a === 97 in unicode so if we grab the unicode value and subtract 96 from it we'll get the value the challenge wants)
		let valuedWords = splitWords.map(word=>word.split('')
				.reduce((acc,letter)=>acc+letter.charCodeAt(0)-96,0))
	//return the element that has the highest score
		return splitWords[valuedWords.indexOf(Math.max(...valuedWords))]
}
console.log(high('aa bb aa'))

//I had dto stop working on this challenge, so I looked at the solutions and the best practice answer is VERY similar. I figured out my code had a parentheses in my reducer that was causing map() to not return the correct value.
//I tried to then work on the return, I thought about using Math.max() and indexOf but couldn't figure out the corret order, so again had to look at the best answer, return the specific element of the split word array that is the highest value using valueWords .indexOf passing it Math.max(...valuedWords) thus Math.max receives the values of the valuedWords array using spread syntax and chooses the highest score and since the order is the same as the split wor order then we return the highest scoring word.
//will try this again in a week or two.
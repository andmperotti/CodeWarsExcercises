//https://www.codewars.com/kata/5264d2b162488dc400000001

// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"



//argument is a string consisting of letters and spaces, spaces are only used to separate words and only when more than one word is present
//output will be a string consisting of the same order of words as the argument however any words that are a length of fiver or more will be reversed.
//examples: "Hi my name is Andrew" => "Hi my name is werdnA", "San Francisco Giants" => "San ocsicnarF stnaiG"

function spinWords(string){
	//split the string into an array
	//iterate over the words of that array looking for words.length >=5, when found we'll reverse their order, here we'll do that by splitting them and then calling reverse on that word array, then join them back together
	//we'll at last join all the words back together into a string and return it
	return string.split(" ").map(e=>e.length>=5 ? e.split('').reverse().join(''): e).join(' ')
	//we used map to create a new array, passing it a callback function that when given a word consisting of 5 or more letters it reversed it via previously mentioned methods in above comments
}
console.log(spinWords('Hi my name is Andrew'))
//best practice answer:
// function spinWords(words){
//   return words.split(' ').map(function (word) {
//     return (word.length > 4) ? word.split('').reverse().join('') : word;
//   }).join(' ');
// }
//Did the same actions my code did, they didn't use an arrow function therefore needed to use a return statement within their map's callback function
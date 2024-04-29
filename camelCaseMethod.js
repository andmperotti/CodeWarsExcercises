//https://www.codewars.com/kata/587731fda577b3d1b0001196

// DESCRIPTION:
// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"



//argument looks to be a string of words, examples seem to make it look like every letter is lowercase, and spaces exist in between each word
//we'll return a version of the argument without spaces delimiting words and each trailing word will have a capital first letter
//"hello case" would be returned as HelloCase
//so actually it's every word that stats with a capital letter



String.prototype.camelCase=function(){
	//had to return an empty string if given an empty string to satisfy a hidden requirement to the challenge, read comments below method call on line 38
	if(this.length<1){
		return ''
	}
	//turn the string into an array and get rid of the spaces by using split(' ')
	let splitArr = this.split(' ')
	//create a variable that is the return of iterating through that split arrays elements and turn each first letter into a capitalized version, by using map() and cocatenating the rest of the elements letters after the capital first letter
	let capitalized = splitArr.map(e=>e[0].toUpperCase()+e.slice(1))
	//turn the new array with capitalized versions back into a string with no delimiter
	let resultString = capitalized.join('')
	//return string 
	return resultString
}
console.log('hello case'.camelCase())
console.log("camel case word".camelCase())
console.log("test case".camelCase())
console.log("".camelCase())
//this above solution worked for me, however I'm getting errors relating to toUpperCase() on codewars...
//I tested an empty argument and received the same error... I'll add an if statement that checks if the argument is empty and returns empty to see if that suffices.
//best practice used a more declarative approach but very similar code, I wanted to be able to explain my decisions more so I chose an imperative approach.
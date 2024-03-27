//https://www.codewars.com/kata/535474308bb336c9980006f2

// DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


var greet = function(name) {
	//The argument can be of any mixture of cases, so we'll need to convert it to the correct format we want; by creating a variable to hold the first letter of the argument string which has .toUpperCase() called on it and then concatenating the rest of the argument string into that variable after you convert it to lower case letters using .toLowerCase()
	let resultName = name[0].toUpperCase()+name.slice(1).toLowerCase()
	//return that variable placed inside the wanted return string using a template literal
	return `Hello ${resultName}!`

};
console.log(greet('dReW'))

//best practice answer added a method to the String prototype which returned adding the instance it was called on (this) first letter changed to upper case and concatenated the remaining chunk of the element converted to lower case, after 'Hello' and before '!'. That's fine and all but we weren't asked to add to the prototype.
//the second best practice answer is a version I thought about following which just returned a string concatenating specific parts of the argument referenced in the return statement, I just wanted to separate some complexity by creating the temp variable but didn't have to.
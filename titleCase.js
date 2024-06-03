//https://www.codewars.com/kata/5202ef17a402dd033c000009

// DESCRIPTION:
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// Arguments (Haskell)
// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// Arguments (Other languages)
// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// Example
// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'




//arguments are: a string that we'll mutate its words to have a first capitalized letter unless the word exists in a second argument, the second argument is optional and represents a string of words that are to not be title cased unless that word is the first word in the first argument. If the case of the word is capitalized the you'll have to convert it to lower case and capitalize the first letter only (unless minor word argument includes it,etc)
//output again will be a version of the first argument string with words title cased that aren't in the second argument.
//examples: 'my name is andrew'=>'My Name Is Andrew', ('my name is andrew', 'my is name')=> 'My name is Andrew'

function titleCase(title, minorWords) {
	//build a return string by converting the first agument into all lowercase letters, then split that string into an array, then use the map method to evaluate if the iterated word is the first word in the string and it's in the 2nd argument string if there is one to just return the value, else return the word with its first letter capitalized and concatenate the rest of the word which will be in lowercase, then join that newly created array from the map method into a string using join(' ') and return it.
	//we use the ?. symbol for when referencing the second argument that way if it's not included then undefined will be returned not an error.
	return title
		.toLowerCase()
		.split(' ')
		.map((word,index)=>
			(index>0&&minorWords?.toLowerCase().split(' ').includes(word)) 
			? word : 
			word.substring(0,1).toUpperCase() + word.substring(1))
		.join(' ')
}
console.log(titleCase('First a of in'))

//codewars didn't like me using toUpperCase on a character via word[0] within a template string like below, but liked me concatenating strings...

// return title
// 	.toLowerCase()
// 	.split(' ')
// 	.map((word,index)=>
// 		(index>0&&minorWords?.toLowerCase().split(' ').includes(word)) 
// 		? word : 
// 		`${word[0].toUpperCase()}${word.substring(1)}`)
// 	.join(' ')


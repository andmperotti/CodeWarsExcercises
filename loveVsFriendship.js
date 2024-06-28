//https://www.codewars.com/kata/59706036f6e5d1e22d000016

//argument is a string made up of letters, should form an english word ie: 'love', the string will always be made up of lower case letters and never be an empty string
//output will be an integer sum of each of the letters of the argument string where a === 1, b===2, ... z===26
//examples: 'love'=>54, 'friendship'=>108



//split the argument into an array of strings
//change the value of each element in that array to an integer respective of where that letter is in the alphabet
//use reduce to sum the values, and return


function wordsToMarks(string){
	return string.split('').map(e=>e.charCodeAt(0)-96).reduce((acc,e)=>acc+e)
}
console.log(wordsToMarks('friendship'))

//this code worked, the best practice answer was a little more concise than mine, it used the spread operator within an array literal passing in the parameter to create an array, it called reduce and within the reducer callback it generated the sum of characters after converting each to an integer using charCodeAt() - 96.
//https://www.codewars.com/kata/59cfc000aeb2844d16000075

//argument is a string of letters, with no spaces, doesn't say if any integers will be present or not.
//output will be an array of 2 strings, one with capital letters for every odd indexed character, the other string witll be capitalized in the opposite format.
//example: capitalize("abcdef")=> ['AbCdEf', aBcDeF']

function capitalize(s){
	//create a temp variable which is an array that will hold the resulting 2 strings
	let result = []
	//split the string argument into an array
	let splitArray = s.split('')
	//use map on the split string array, twice, one for each format required, turn them into strings using join(''), then push them into the temp array variable
	result.push(splitArray.map((e,i)=>i%2===0 ? e.toUpperCase() : e).join(''))
	result.push(splitArray.map((e,i)=>i%2!==0 ? e.toUpperCase() : e).join(''))
	//return the result array which is holding the output of the two map() invoked
	return result
};

console.log(capitalize('abcdef'))

//this code worked, and best practice answer was very close to this, however their was better as it used 2 less lines of code. 
//I could have just made 2 variables which were the result of splitting the argument string and then run map on them with the same callback function, then after both variables have been made returned both comma separated in an array literal.

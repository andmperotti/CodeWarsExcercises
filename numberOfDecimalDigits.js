//https://www.codewars.com/kata/58fa273ca6d84c158e000052

// DESCRIPTION:
// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

// All inputs will be valid.




//argument will be an integer
//output will be the number of decimal digits of that argument integer, aka the length
//examples: 123=>3, 5555=>4

function digits(n) {
	//return the argument changed into a string and asking for the length property value of it
	return n.toString().length
}
console.log(digits(111))

//this code worked.
//it was also the same code as the best practice answer, the second best answer used String(argument).length which I know for a fact is bad because String(undefined).length will actually return the legnth of 'undefined' or 'null' if that's passed in rather than an error being thrown which is what toString() will do.
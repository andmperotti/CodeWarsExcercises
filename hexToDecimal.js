//https://www.codewars.com/kata/57a4d500e298a7952100035d

DESCRIPTION:
Complete the function which converts hex number (given as a string) to a decimal number.

function hexToDec(hexString){
	//The argument is a string, the parseInt method returns an integer from a string argument and you can tell it what radix to use to convert.
	return parseInt(String(hexString), 16)
}
console.log(hexToDec('a'))


//best practice answer used the same method
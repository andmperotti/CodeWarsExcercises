//https://www.codewars.com/kata/546f922b54af40e1e90001da

// DESCRIPTION:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"




//argument is a string consisting of more than just letters, and letters can be either upper or lower case
//output will be a string of numbers that reflect where letters from the argument string are in the alphabet, as in their position #'s. Anything not a letter will be ignored completly and not returned.
//example: 'a b c' => '1 2 3'

function alphabetPosition(text) {
	//iterate over the string by turning it into an array using the split method, then run filter on that array to create an array by using a callback that checks if each iteration element converted to lower caes  is a letter by using charCodeAt. Then we'll use map to iterate over that temp array and change each element to its position in the alphabaet value by using the value converted to lowercase and obtaining its unicode value and subtracting 96 from it to give it its value in the alphabet (a = 97, subtract 96 == 1 and that's where we want a to be)
	return text.split('').filter(e=>e.toLowerCase().charCodeAt(0)>=97&&e.toLowerCase().charCodeAt(0)<=122).map(e=>e.toLowerCase().charCodeAt(0)-96).join(' ')
}
console.log(alphabetPosition('Andrew ! is Kool'))

//this code worked...
//best practice answer:
// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }
//they created a temp string varaible
//used a for loop to iterate over the elements of the argument string
	//created a temp variable which was the string converted to uppercase and charCodeAt used on the current iterated element, so this 'code' variable was the unicode of the current letter converted to uppercase
	//if that variables value was greater than 64 and less than 91 then they added that value-64 to the first temp variable with a space after it
//then they returned a substring of the temp string variable, they did this to remove the space after the last value...
//I like my code better however my code is super declerative and jumbled.
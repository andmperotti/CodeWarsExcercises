//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number=function(array){
	let tempArr = []
	for(let i = 1; i<=array.length; i++){
		tempArr.push(`${i}: ${array[i-1]}`)
	}
	return tempArr
}

//I'm going to try to use a for loop and each iteration will result in adding a number and then a colon, using backticks and template literals.
//I'll use a temporary variable to create a new array, which will be returned after all iterations of the loop add the newly formed strings.

console.log(number(["a", "b", "c"]))

//best practice answer used map:
// var number = function(array) {
//   return array.map(function (line, index) {
//     return (index + 1) + ": " + line;
//   });
// }

//They use the index parameter to help them build their iterating number, I did not think about that at all, will create an Anki card for this challenge so I can learn that trick.
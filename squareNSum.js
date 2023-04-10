//https://www.codewars.com/kata/515e271a311df0350d00000f

/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

 */

function squareSum(numbers){
	let result = 0;
	for(let number of numbers){
		result += (number * number)
	}
	return result
}
console.log(squareSum([1,2]))

//https://www.codewars.com/kata/53dc54212259ed3d4f00071c
//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Sum Numbers
function sum (numbers) {
    "use strict";
	let result = 0;
	for(let number of numbers){
		result+=number
	}    
    return result
};

//I didn't want to use reduce because I felt like that was too easy but here is what I would have done:
// function sum(numbers) {
// 	"use strict"; 
// 	return numbers.reduce((accum,c)=>accum + c, 0)
// }
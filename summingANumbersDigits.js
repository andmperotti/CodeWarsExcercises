//https://www.codewars.com/kata/52f3149496de55aded000410

// DESCRIPTION:
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
	//create a temporary variable which is the integer argument converted into a string then into an array, and we use map() to turn the array elements back into integers
	let intArray = String(number).split('').map(Number)
	//map() also turns '-' into a number...
	//if the first element in the array is Not a Number, it's the negative sign, we'll use a string of integers 0 through 9 to check whether 0 index of intArray is the negative symbol, then use reduce on the remaining elements of the array and return the sum
	if(!'1234567890'.includes(intArray[0])){
		return intArray.slice(1).reduce((acc,cur)=>acc+cur, 0)
	//else run reduce on the entire array because they should all be integers and then return that sum
	}else{
		return intArray.reduce((acc,cur)=>acc+cur, 0)
	}
	//else run reduce on all of the elements in the array and return the sum
}

console.log(sumDigits(-33))


//worked
//however here is the best practice voted answer:
// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
// }
//This makes sense because Math.abs() removes the - symbol form the argument, then this runs split to make an array (of string elements) and then run reduce on those element and by using the + symbol prefacing the accumulator and iterator variable to convert the string elements into integer elements.


//instead they could have written:
// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce((a,b)=> a + +b, 0);
// }
//since the initial value is 0 not '0', they don't need to preface the accumulator with + to convert it to an integer each loop iteration
//I'll make an Anki card to rememeber that you need to convert a number to a string to use split() to make an array, and that you can use map(Number) to convert the array elements to integers, or that you can use + prefacing a parameter to change the argument into an integer when the function is invoked.
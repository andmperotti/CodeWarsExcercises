//https://www.codewars.com/kata/534d0a229345375d520006a0

// DESCRIPTION:
// Complete the function power_of_two/powerOfTwo (or equivalent, depending on your language) that determines if a given non-negative integer is a power of two. From the corresponding Wikipedia entry:

// a power of two is a number of the form 2n where n is an integer, i.e. the result of exponentiation with number two as the base and integer n as the exponent.

// You may assume the input is always valid.

// Examples
// isPowerOfTwo(1024) // -> true
// isPowerOfTwo(4096) // -> true
// isPowerOfTwo(333)  // -> false
// Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

//so we'll write a function that checks if the argument can be the result of a power of 2; 2^n === argument

//I'll write a recursive function which recursively divides the argument by 2 all the way down until the recursive argument is either equal to 0 which will return false, or 1 which will equal true

function isPowerOfTwo(x){
	if(x===0){
		return false
	}else if(x===1){
		return true
	}else{
		return isPowerOfTwo(x/2)
	}
}
console.log(isPowerOfTwo(2))

//parameters: a non-negative integer
//return: true or false, if th argument is a power of two...
//examples: 1024=>true, 4096=> true, 333=>false
//pseudo code

//best practice answer used Math.log2(x), to calculate if an argument was a result of a power of 2 calculation, I actually tried to google for a method like this but apparently my wording was off. The third best answer used recursion, the second best practice answer actually copmpared every power of 2 up to 2147483648... I don't think that answer should be near the top...
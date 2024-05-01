//https://www.codewars.com/kata/5552101f47fc5178b1000050

// DESCRIPTION:
// Some numbers have funny properties. For example:
// 89 --> 8¹ + 9² = 89 * 1
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// In other words, writing the consecutive digits of n as a, b, c, d ..., is there an integer k such that :
// a to the power of p + b to the power of p+1 + c to the power of p+2 + d to the power of p+3 +... = n*k
// If it is the case we will return k, if not return -1.

// Note: n and p will always be strictly positive integers.
// Examples:
// n = 89; p = 1 ---> 1 since 8¹ + 9² = 89 = 89 * 1

// n = 92; p = 1 ---> -1 since there is no k such that 9¹ + 2² equals 92 * k

// n = 695; p = 2 ---> 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2

// n = 46288; p = 3 ---> 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51




//arguments have been stated to always be strictly positive integers, n is representative of a value, and k is representative an exponent starter value, which we'll need to use...
//output will be either -1 if the inputs don't accumulate to k via iteration and incrementation of the exponent starter value, or are a root or square root of a
//89=>1, 8 to the first + 9 to the second = 89, therefore === 1. 

function digPow(n, p){
	//I'll first pull apart n by turning it into a string and then using split() to make an array
	let splitN = String(n).split('')
	//We'll use iteration to create the product of each element raised to the  p values, p will be incremented as well as our iteration variable, and this will loop until the loop iterator is = splitN.length
			//create a variable which is given each elements product after being raised to the incrementing power.
	let accumulationRaisedValues = 0

	for(let i = 0; i<splitN.length; i++){
		accumulationRaisedValues+=splitN[i]**p
		p++
	}
	//check the square root of the variable that has the sum of each result, against the starting value argument n, use ternary to return -1 or the number of occureneces of n it would take to match the value of accumulationRaisedValues, by using modulos to check if n goes into the accumulation variable a whole number of times. 
	return accumulationRaisedValues%n ===0? accumulationRaisedValues/n : -1;
}
console.log(digPow(89, 1))

//I did solve this challenge with the above code but it is very imperative, not very nice to look at.
//Best practice answer:
// function digPow(n, p) {
//   var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
//   return x % n ? -1 : x / n
// }
//They also turned the n argument into an array by turning the integer into a string and then splitting it, then they called reduce to iterate through the elements of that array and each iteration: accumulator + current element raised to p + i , which meant that the first element's index was 0 and so first element raised to the initial p argument value. I didn't think to do that add the index to the p to iterate the p inline.
//Where they lost me is they say return -1 if x%n, otherwiser return x/n. x is their return accumulation of the products, but 0 is falsy so the outcome of n dividing the accumulation evenly would be false and so they'd return -1 when they should have returned 1 or the number of times.... but I run their code and it works... huh?
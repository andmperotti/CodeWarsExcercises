//https://www.codewars.com/kata/5aff237c578a14752d0035ae

// DESCRIPTION:
// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
	let sumMultipliedAges = Array.from(arguments).reduce((acc,age)=>acc+(age*age),0)
	return Math.floor(Math.sqrt(sumMultipliedAges)/2)
}

 //if we need to multiply each argument value by itself and then add them together, I think we'll use the arguments object surrounded by the Array.from method to create an array, and use the reduce method to multiply each by itself then add that result to the accumulator.
//finally we'll surround the last steps with Math.floor to round the final integer down to a whole integer, those last steps include: converting the total from that reduce call and square rooting it, then divide it by two and return
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))




//best practice used a temp variable instead of using the arguments object, and used Math.floor to round the result of the square root of the accumulated total of each age multiplied by itself then divided that that total by 2.
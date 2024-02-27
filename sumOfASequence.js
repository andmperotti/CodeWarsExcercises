//https://www.codewars.com/kata/586f6741c66d18c22800010a

// DESCRIPTION:
// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
	//if beginning value is greater than the end, return 0
	if(begin>end){
		return 0
	//otherwise:
	}else{
		//declare a temp variable to hold the sum, give it a starting value of 0.
		let result = 0
		//use a for loop, iterator variable starts with the begin argument, as long as the iterator is less than or equal to the end argument condition, increment the iterator by the step argument. Each iteration add i to the temp variable aka 'result'
		for(let i = begin; i <=end; i+=step){
			console.log(i)
			result += i
		}
		//return the temp variable aka the sum of the operations
		return result
	}
};

console.log(sequenceSum(1,5,3))

//best practice answer reminded me I don't need a for loop, I could just return the result variable when no looping happens as begin > end. 
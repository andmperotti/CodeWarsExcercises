//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

// DESCRIPTION:
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
	//use a ternary to return an empty array if the argumment was an empty array or null, else return sort() called on the argument 'nums' using an ascending sort callback
	//This is using truth falsy values, an empty array or null would be falsy
	return nums ? nums.sort((a,b)=>a-b) : []
}
console.log(solution([1,30,3,2,50,5])) //[1,2,3,5,30,50]

//https://www.codewars.com/kata/5949481f86420f59480000e7

//  DESCRIPTION:
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!



//let's use a reducer to get the sum
//then retun the outcome of a condtional using that sum with modulous and 2 to check if even or odd


function oddOrEven(array) {
	return array.reduce((accum, each)=>accum+each,0)%2==0 ? 'even' : 'odd'
}

console.log(oddOrEven([0,1,4]))

//Yes this works, and it was the best practice voted answer on the solutions page.
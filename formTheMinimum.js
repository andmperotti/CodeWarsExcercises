//https://www.codewars.com/kata/5ac6932b2f317b96980000ca

// DESCRIPTION:
// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

function minValue(values){
	//We'll use sort((a,b)=>a-b) to sort our array elements in an ascending order
	//Then we'll turn the array into a set to get rid of the duplicate elements
	//Then we'll turn it back into an array and use join('') to create one element from all of the element
	//Finally we'll return a number by using the Number construtctor around the array name while calling join method on it, so we are combining the elements of the array into a string with join, and then converting that into a number type by wrapping it in the number constructor function.
	values.sort((a,b)=>a-b)
	values = new Set(values)
	values= Array.from(values)
	return Number(values.join(''))
}
console.log(minValue([1,3,1]))


//best practice answer used two lines of code, first they created a variable which was the result of creating an array from a set they made from the argument values object. Then they returned the output of parseInt which surrounded the sorting and joining of the temp variable into a string.
//I like how they kept the argument alone but I dislike the use of parseInt when we have a simpler Number(), maybe there's a specific reason for parseInt in this usage I haven't learned about yet.


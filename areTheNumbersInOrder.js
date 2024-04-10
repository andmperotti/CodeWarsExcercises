//https://www.codewars.com/kata/56b7f2f3f18876033f000307

// DESCRIPTION:
// Are the numbers in order?
// In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.

// Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.

// For example:

// inAscOrder([1,2,4,7,19]); // returns true
// inAscOrder([1,2,3,4,5]); // returns true
// inAscOrder([1,6,10,18,2,4,20]); // returns false
// inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because the numbers are in DESCENDING order
// N.B. If your solution passes all fixed tests but fails at the random tests, make sure you aren't mutating the input array.


//I had this challenge 2 weeks ago, but a different challenge on codewars
//first off we can't just use arrayName.sort() because that will mutate the array object
//and because of arrays of no values or one values, we need to account for that
//so we use array.every() and we use each element and their index, to check if their index is 0 or if the current elements value is greater than or equal to the previous elements value which is ascending.

function inAscOrder(arr) {
	 return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])
}
console.log(inAscOrder([1,2,3]))

//another way to do this is to create a for loop which returns false when checking if the current elements values is > the next elements value, otherwise return nothing, and then after the loop return true.
// function inAscOrder(arr) {
//   for(let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i+1]) {
//       return false; 
//     }
//   }
//   return true;
// }


//https://www.codewars.com/kata/545a4c5a61aa4c6916000755

// DESCRIPTION:
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers (Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



function gimme (triplet) {
	//use findIndex method to return the index of the value that is neither the lowest value nor the highest value; !=Math.min(...array)&&!=Math.max(...array)
	return triplet.findIndex((val,ind,arr)=>val!=Math.min(...arr)&&val!=Math.max(...arr))
}
console.log(gimme([7,3,0]))

//best practice answers used a temp array then sorted it in ascending numeric value order and then returned the second element using [1], of course they could have even sorted in descending because the value they wanted to return would still be in the second index [1].
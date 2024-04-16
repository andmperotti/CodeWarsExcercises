//https://www.codewars.com/kata/54e6533c92449cc251001667
// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


//we'll need to turn the argument if it's a string into an array, for which we'll use a temporary variable 'converted' to hold that converted outcome, and the way we create this array from a string also copies the argument if it's an array by using the spread syntax within a literal array ([])
//then we'll iterate over the temp array object and remove any repeat values
//then we'll return the array

var uniqueInOrder=function(iterable){
	let converted = [...iterable]
	return converted.filter((ele, index,arr)=>ele!=arr[index-1])
}
console.log(uniqueInOrder(['A', 'A', 'A', 'b']))

//best practice used a more declarative approach while I could have refactored my above code but didn't. I was hung up on the ending of the filter()'s expression, I was using ele[index-1], when I needed to use arr... 
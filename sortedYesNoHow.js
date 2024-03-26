//https://www.codewars.com/kata/580a4734d6df748060000045
// DESCRIPTION:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.



//so we have 3 possible situations to check for and then return which is true, if the argument array is ascending, descending, or neither.
//we'll most definetly need to use the sort() and comparison to reach our desired outcomes
//we'll need to convert the arrays to strings because you can't use comparison operators on arrays as they are reference objects, not primitives.
//we'll also need to include a condition to check if the array is made up of only one value multiple times because that would not be ascending or descending
function isSortedAndHow(array){
	//we'll need to declare 2 variables which are the sorted versions of the array argument, so we can compare ...
	let ascending = [...array].sort((a,b)=>a-b)
	let descending = [...array].sort((a,b)=>b-a)
	//we'll need to compare string versions of the array argument and the ascending and descending varaibles, because we can't use == or === with reference objects
	//we'll also need to check if the array was made up of only duplicate element values, that will be first
	return ascending[0]===ascending[ascending.length-1] ? 'no' : array.join('')===ascending.join('') ? 'yes, ascending' : array.join('')===descending.join('') ? 'yes, descending' : 'no'
}
console.log(isSortedAndHow([1,1]))

//This was a nice refresher to what happens to a reference object when you use sort() even within its own scope... it changes the object. It was also nice to reveiew how comparison works for reference vs primitive objects. And finally how the logic of your code can alter a result; what led to the first condition.

//best practice answer used every();
// function isSortedAndHow(arr) {
//   return arr.every((x,i)=>i==0||arr[i]>=arr[i-1])?'yes, ascending':
//          arr.every((x,i)=>i==0||arr[i]<=arr[i-1])?'yes, descending':'no'
// }
//They also used ternary however using the every method 
//The problem with their code is that if you pass in [0,0] it returns 'yes, ascending' however it's clearly not ascending. The creator of this challenge didn't give a test case with an argument like [0,0] or [1,1] just gave an ascending, descending, and mixed array argument, so I'd argue that I planned for the worst when sadly it wasn't asked for.
//But anyways their code uses every() which takes in a callback function and if every element passes the callbacks outcome, then the return is true, here they say if the index of the element being checked is 0 or if their value is greater than the last element checked (using i for index and i-1) then that's ascending then returns the appropriate ascending return, else checks similarily if an element index is 0 or if it's less than the previous element in the array for each element and returns appropriate descending, otherwise returns 'no'.
//I'm going to add this function to my Anki deck for future practice.
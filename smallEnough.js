//https://www.codewars.com/kata/57cc981a58da9e302a000214

//arguments are an array of integers and an integer. The integer is a limit value, and it will be used as a boundary against the values in the array... We can assume all values in the array are numbers
//output will be true or false as a result of if the values in the array are less than equal to the limit integers value.
//examples: ([1,2,3,4,5],6)=>true, ([1,2,3],2)=>false

function smallEnough(a, limit){
	//we can use the every method and pass it a callback that gets invoked on each value in the array, and in that callback we compare the current iteration value to the limit value, so by saying if iteration <= limit every() will return true if all values in the array are less than or equal to limit, else it'll return false if even just one value in the array is not equal to or less than the limit variable value.
	return a.every(n=>n<=limit)
}
console.log(smallEnough([1,2,3],4))

//this code worked, however the best practice answer used less iteration by using Math.max(...a) <= limit, which has been a frequent realization this past week; that using Math methods is sometimes easier on performance of the machine and therefore more efficient. I'll create an anki card on this to remember.
//https://www.codewars.com/kata/5679aa472b8f57fb8c000047

//argument is an array of integers which are whole but can be positive or negative, and the length of elements in this array are greater than 1 and less than 1000
//output is an integer which represents the index of the value that is inbetween the same accumulate sums (to the left = before it, to the right of it = after it), or -1 if there is no index where this happens. This would also be the first index that this occurs at, in case there are multiple.
//examples: ([1,2,3,4,3,2,1])=>3 , ([1,100,50,-51,1,1])=>1



function findEvenIndex(arr){
	//create 2 variables that will hold each side sum of elements
	let leftSum = null;
	let rightSum = null;
	//use a for loop which calculates both the left side up to the itertor value as an elements index and the right side after it
	for(let i = 0; i<=arr.length; i++){
		leftSum = arr.slice(0,i).reduce((acc,cur)=>acc+cur,0)
		rightSum = arr.slice(i+1).reduce((acc,cur)=>acc+cur,0)
		//if the left side === right side, return the iterator value as that corresponds to the index value we're looking for

		if(leftSum===rightSum){
			return i
		}
	}
	//return -1 if an element did not exist with equal sums before it and after it
	return -1
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))
console.log(findEvenIndex([1,100,50,-51,1,1]))


//my code worked, I had some hiccups, thought split() was slice(), and then to be able to use reduce on an array of 0 length we just give reduce an intial value of zero.

//best practice answer:
// function findEvenIndex(arr)
// {
//   var left = 0, right = arr.reduce(function(pv, cv) { return pv + cv; }, 0);
//   for(var i = 0; i < arr.length; i++) {
//       if(i > 0) left += arr[i-1];
//       right -= arr[i];
      
//       if(left == right) return i;
//   }
  
//   return -1;
// }
//this function declares 2 variables, left is given the value of 0, and right is given the accumulated value of all elements in the array. It uses a for loop to iterate over the elements in the array and each iteration: checks if i is greater than 0 and if so adds the previous iterations element value to the left variable, then subtracts the current iteration elements value from the right variable, and checks if the two variables are ==, and if so returns the iteration value which is the index value where the elements before it summed are equal to the elements after it summed. Else it returns -1.
//This way reduces alot of repeated procedures that my answer is using. I'll create an anki card for this type of question where I focus on how to reduced repeated unnecessary methods.
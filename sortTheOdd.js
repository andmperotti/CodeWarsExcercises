//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// DESCRIPTION:
// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]





//argument is going to be an array that contains integer values as elements
//output will be an array with the odd integer element values sorted in ascending, while the even element integer values stay in their original positions
//example: [7,2,4,1,9,5,6,8] => [1,2,4,5,7,9,6,8]
function sortArray(array) {
	//create a new array of just the odd integer value elements by using filter
	let odds = array.filter(e=>e%2!==0)
	//sort the temp array of odd value elements
	odds.sort((a,b)=>a-b)
	//iterate over original array and check whether the iterator element is holding an odd integer and if so replace it with the first element in the temp array using shift, which will pop out the elmeent from the front of that odd array.
	for(let i = 0; i<array.length; i++){
		if(array[i]%2!==0){
			array[i]=odds.shift()
		}
	}
	//return the array
	return array
}
console.log(sortArray([7,2,4,1,9,5,6,8]))

//this passed the tests and was accepted on submittance

//best practice answer:
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
//this funcition also create a temp array of the odd valus and sorted it in ascending order. then retured the output of running map on the array argument, map built an array by taking each element from the original array and if it was divisible by  2 then that equates to 0 but in a ternary equation 0 is falsy so anything that was not divisble by 2 is replacec with an element from the odd array via odd.shift() else it remains the value it was (even).
//so my code was pretty similar but theirs was more concise.
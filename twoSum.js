//https://www.codewars.com/kata/52c31f8e6605bcc646000082

// DESCRIPTION:
// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

// Based on: https://leetcode.com/problems/two-sum/

// twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
// twoSum([3, 2, 4], 6) // returns [1, 2] or [2, 1]




//our function will take in 2 arguments, an array of integers, and an integer. The array argument will have at least 2 elements or greater than 2.
//our output will be an array of the indice of 2 argument array elements which summed together produce the same value as the second argument to the function
//an example: ([2,4,6],8)=>[0,2]

function twoSum(numbers, target) {
	//use 2 for loops, one nested inside the other that allows us to iterate over the array while iterating over it again per each element that's being iterated over in the first loop so we can check value combinations
	for(let i = 0; i<numbers.length; i++){
		for(let j = 0; j<numbers.length;j++){
		//make sure to ignore the same element summed with itself
			if(i===j){
				continue
			//if a combination is found then return an array with their indice using both for loops iteror varaibles
			}else if(numbers[i]+numbers[j]===target){
				return [i,j]
			}
		}
	}
}
console.log(twoSum([2,4,6],8))

//my above sufficed
//best answer uses for two for loops to do the exact same thing... 
//https://www.codewars.com/kata/54da5a58ea159efa38000836

// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


//here we'll have to make a map out of our array argument, using forEach
//then we'll loop through that map to find the value that had an odd number of occurences in the argument array and return that value
function findOdd(A) {
	let mappedA = new Map()
	A.forEach((ele)=>{
		if(mappedA.has(ele)){
			mappedA.set(ele, mappedA.get(ele)+1)
		}else{
			mappedA.set(ele, 1)
		}
	})
	for(let [key,value] of mappedA){
		if(value%2!==0){
			oddValue = key
			break
		}
	}
	return oddValue
}
console.log(findOdd([1,1,2,3,3]))

//I've never done this before so I did not pull it from memory, however I will add it to my Anki deck for future studying as I'm sure this is very valuable to know.

//looking at the solutions there are many, 
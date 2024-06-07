//https://www.codewars.com/kata/5ce399e0047a45001c853c2b

// DESCRIPTION:
// Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6] 
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
// Notes
// Take a look at performance: some lists have thousands of elements.
// Please ask before translating.



//argument will be an array of integers >=0
//output will be an array of integers that are built by reducing the argument array to one value via addition, then removing the first element from the array and reducing those elements to a single value again, this continues until there are no values in the argument array. The last value in the returned array should be a 0, which is created when there are no longer elements in the argument array.
//examples: [1,2,3]=>[6,5,3], [5,4,3]=>[12,7,3]



// function partsSums(ls) {
// 	//we're going to need to iterate a number of times === initial length of the argument array, we could write the loops condition to work as long as the array.length>0. So we'll use a while loop.
// 	//Each iteration will use reduced to build a value that gets pushed into a new array
// 	//then shift() will be used to remove the first element in the array
// 	let result = []
// 	while(ls.length>0){
// 	 	result.push(ls.reduce((acc,el)=>acc+el,0))
// 	 	ls.shift()
// 	}
// 	//push a zero to signify there are no more elements in the argument array
// 	result.push(0)
// 	//when the iterations have finished, return the built array
// 	return result
// }
// console.log(partsSums([1,2,3]))


//So of course there was a note "Take a look at performance: some lists have thousands of elements.", and of course my function above took too long on a test case, so I'm goign to rewrite it below using a different techinique.

function partsSums(ls){
	//we're going to build an array that will store the accumulations
	let result = []
	//Next we're going to start with an accumulated value of all elements in the argument array
	let accumulatedValue = ls.reduce((acc, el)=>acc+el,0)
	//push this accumulation to the resulting arrray as this will represent the first desired element
	result.push(accumulatedValue)
	//then we'll use a for loop to loop as many times as elements in the argument array, subtracting each element from the sum element, saving it as the sum, and adding that sum value to the resulting array. This includes adding a 0 for the last iteration.
	for(let i = 0; i<ls.length; i++){
		accumulatedValue-=ls[i]
		result.push(accumulatedValue)
	}
	//finally we'll return the result array.
	return result
}
console.log(partsSums([1,2,3]))

//why did this work on not the first? 
//Because the first version used reduce each time the loop iterated over the argument array
//The second attempt uses reduce once, then uses a for loop to remove each of the argument elements and adds the new accumulation, per iteration.

//best practice answer:
// function partsSums(ls) {
//     ls.unshift(0);
//     let sum = ls.reduce((p, c) => p + c, 0);
//     return ls.map(v => sum = sum - v);
// }
//This function adds a 0 to the beginning of the argument array. Then sets up a variable that is the invocation of reduce which gives a sum of the values in the argument array. Then returns the running of map on the argument array giving it a callback function that takes each value and returns the result of the accumulation subtracting the current element while also saving each return value as the new sum variable to run on the next iteration. 
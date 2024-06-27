//https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

//argument is an array of integers, by looking at the example args I see only whole integers
//output will be an array made up of only the even integers from the argument array
//examples: [0,1]=>[0], [0,1,2,3]=>[0,2]

function noOdds( values ){
	//we'll use filter method on the values parameter which represents a value that is an array of whole integers, this will return a new array of values that pass our callback test. We'll use a callback function that compares the output of each element % 2 ===0, and therefore ignore the odd integers.
	return values.filter(e=>e%2===0)
}
console.log(noOdds([0,1,2,3,4])) //expected output: [0,2,4]

//my code worked, and was the same as the best practice answer
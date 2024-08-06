//https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

//argument is an array of integers, seemingly postiive and no floating numbers
//output will be an array made up of only the odd integers
//example: ([1,2,3,4,5])=>[1,3,5]

function odds(values){
	return values.filter(e=>e%2!==0)
}

//we'll use the filter method on the 'values' argument array and give it a statement that evaluates true when the number is odd (e=>e%2!==0)

//this was pretty close to the best practice answer, it instead just used v=>v%2 which would return a 0 if v was an even number meaning falsy and would not push that even integer into the resulting array.
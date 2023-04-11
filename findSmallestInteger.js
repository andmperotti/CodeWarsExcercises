//https://www.codewars.com/kata/55a2d7ebe362935a210000b2
//Find the smallest integer in the array


function findSmallestInt(args) {
	//we were told to assume that supplied arrays would not be empty
	let result = args[0]
	for(let number of args){
		if(number < result){
			result = number
		}
	}
	return result
}

//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)





//argument seems to be a positive integer
//output needed is 'multiplicative persistence', the number of times you must multiply the elements of the argument integer until you reach a single digit
//for example given 39 would return 3, because 3*9 is 27, 2*7 is 14, and 1*4 is 4, therefore 3 iterations were needed


function persistence(num) {
	//will have to split the argument into an array, then multiply the elements off each other, and if that result is not a single digit do the entire process repeatedly until the output is a single digit
	//so create a while loop that runs while String(num).length>1, which does the above
	//keep track of the iterations
	let iterations = 0;
	while(String(num).length>1){
		iterations += 1
		num=String(num).split('').reduce((acc,cur)=>acc*cur)
	}
	return iterations
}
console.log(persistence(0))

//I tried to write a recursive answer but couldn't find a way to build the iterator to not get reset each recursive call... My answer used a while loop which the best practice answer also used, the rest of the code was very similar as well.
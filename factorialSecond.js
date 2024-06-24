//https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc

//argument is an integer greater than or equal to 0 and less than or equal to 12
//output will be the product of all numbers less than or equal to the argument integer value
//example: 5=>120 (1*2*3*4*5)
//note if the input integer value is below 0 or above 12, throw an exception of type 'RageError'


// function factorial(n){
// 	//using an if statement to check if n is equal to 0, if so return 1
// 	if(n===0||n===1){
// 		return Number(1)
// 	}if(n>1&&n<=12){
// 		//if(n is greater than 0 and less than or equal to 12)
// 		//we'll create an array using the n argument value
// 		let intArray = Array.from({length: n},(x,i)=>i+1)
// 		//then use reduce to prodcue the product of the integers up to and including n, and return the output
// 		return intArray.reduce((acc,cur)=>acc*cur,0)
// 	}else if(n<0||n>12||n===null||n===undefined){
// 		throw RangeError
// 	}
// }
// console.log(factorial(5))

//I just remembered this is solvable using recursion

//use recursion to call past/smaller versions of the problem
function factorial(n){
	//check if n is less than 0, if so throw RangeError
	if(n<0||n>12){
		throw RangeError
	}else if(n===0){
		return 1
	}else{
		//else recursive call which reduces the argument by 1 each time
		return n*factorial(n-1)
	}
}
console.log(factorial(12))

//this code worked, as I was attempting the first iteration using reduce I realized that I had done this problem before, and I used recursion, it was as I was sitting here thinking how can I get 0 argument to return 1 and 1 argument to return 1 instead of using reduce I thought "can I use recursion? of course I can"

//best practice answer:
// function factorial(n) {
//   if (n < 0 || n > 12)
//     throw new RangeError();
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
//this is an even more concise version of using recursion by using an initial if statement for the throw RangeError, and I didn't even think to use new RangeError. If n is greater than or equal to 0 and less than or equal to 12 then it returns 1 if n is less than 1 or equal to 1 else recursively calls the function and reduces the argument by 1 each iteartion.
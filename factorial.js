//https://www.codewars.com/kata/57a049e253ba33ac5e000212

//DESCRIPTION:
// Your task is to write function factorial.
// https://en.wikipedia.org/wiki/Factorial


//I believe we'll use a recursive function for this and the base case will be if n === 0 then return 1
function factorial(n){
	//conditional that checks if n===0, which is our base case and we'll return 1
	if(n===0){
		return 1
	}else{ //else recursive call using n of the current call times recursive call minus 1 from the argument
		return n * factorial(n-1)
	}
}
console.log(factorial(9))

//Best practice answer was a one liner which still used a recursive function:
//const factorial = n => n ? factorial(n - 1) * n : 1;
//I didn't think to write it this way, here it checks for n, which will be true unless n === 0 which it'll return 0 and that's the base case, otherwise returns the recursive call with n-1 and multiplies that by n, so it's doing the same thing as my function but is concise.
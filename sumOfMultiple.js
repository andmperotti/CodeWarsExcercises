//https://www.codewars.com/kata/57241e0f440cd279b5000829

// DESCRIPTION:
// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"


function sumMul(n,m){
	//use a temp variable to hold accumulating total
	let result = 0
	//using a for loop, we'll iterate over the multiples of n and add them to result until a multiple is not < m:
	//iteration variable starts at 1, as long as that iterations product with n is less than m then the iteration continues, adding 1 to i, and adding the product of i * n to the result variable
	for(let i = 1; i*n<m; i++){
		result+=i*n
	}
	//return the accumulated result, if it's greater than 0, otherwise return 'INVALID' as the test case showed
	return result > 0 ? result : 'INVALID'
}
console.log(sumMul(2,9))

//best practice answer function started with a condition that checks if n is greater than or equal to m and if it is then it returns "INVALID". Otherwise it declares a variable for the purpose of accumulating a result. Uses a for loop which sets the iteration variable to n, as long as i is less than m it iterates, and increments i += n each iteration. Their code is easier to understand than mine in that regard. Then they increment their result variable by i each time and return the result after iteration.
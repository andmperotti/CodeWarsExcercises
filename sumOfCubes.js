//https://www.codewars.com/kata/59a8570b570190d313000037

// DESCRIPTION:
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

//we'll use a loop to iterate from 1 to n, and each iteration will add the current i value cubed into a temp variable which is returned after the loop is done running
function sumCubes(n){
	//temp variable for sum
	let results = 0;
	//for loop starting at 1, runs up to and including n
	for(let i=1; i<=n; i++){
		//add in iterations cube
		results += i**3
	}
	//return sum of cube iterations
	return results
}
console.log(sumCubes(3))


//best practice voted solution used recursion. They had a base case of when n==1 return n**3, else return n**3 + recursive call(n-1), I didn't think to use recursion here but it makes sense.
//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//This is a review for a problem I failed before
//The first time I wanted to make a recursive function but couldn't figure out how to achieve the outcome
//Upon googling this problem I saw that it was related to a specific math theorem, for which I hadn't encountered in my life

function rowSumOddNumbers(n) {
	return Math.pow(n, 3)
}
console.log(rowSumOddNumbers(42))

//You could also return n*n*n, it's the same thing

//https://www.codewars.com/kata/578553c3a1b8d5c40300037c

// DESCRIPTION:
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11
// However, the arrays can have varying lengths, not just limited to 4.

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

console.log(binaryArrayToNumber([0,0,0,1]))

//This worked although I had to look up the 2nd argument possibilities, I thought binary was regarded as '1' but it was actually '2' 
//We created a string of the array elements by using the join method, then parseInt took that string and telling it binary(2) it evaluated that binary string to a value
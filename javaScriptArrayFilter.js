//https://www.codewars.com/kata/514a6336889283a3d2000001

// DESCRIPTION:
// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


//argument will be an array of integers
//output will be an array of even numbered integer elements from the argument array
//examples: [1,2,3,4,5,6]=>[2,4,6], [1,3,5,8,9,11,13]=>[8]

function getEvenNumbers(numbersArray){
	//return the output of calling the filter method on the argument (array) and pass it a callback function that takes the current iterated element and checks if the result of modulous 2 is zero meaning the value is even because evenly divideable by 2.
	return numbersArray.filter(e=>e%2===0)
}
//My code worked, and it's very similar to the best practice voted answer.
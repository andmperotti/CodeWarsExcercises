//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

//argument is an integer, which represents the number to build to in your multiplication table.
//output will be an array of arrays, each sub array is a line from the multiplication table, so 1 line for all of 1 x the numbers up to and including the argument value, then the next sub array is made up of values resulting from 2 timnes 1 incrementing up to the argument value, and so on until you create the sub array of the argument value multiplying all values up to and including the agument value.
//example: (3)=> [[1,2,3], [2,4,6], [3,6,9]]


//I'm thinking of nested for loops, and when I think of those I think "should I use recursion?", which will be slower to run but easier to read. If we used recursion then we'd have to work from 15 down to 1 but still use the 15 to build the values 1 is multiplied by, then work our way up to the 15 sub array.
//If we use for loops, we'll iterate once per value up to argurment value creating a sub array which is made up of and by: for each of those iterations we'll loop and multiply the iterator times the parent loops iterator and push those values into a sub array which will be pushed into a larger array.
//I'll use the nested for loops, and maybe later use recursion.
multiplicationTable = function(size) {
	//build a temp variable to hold the sub arrays
	let result = []
	//for loop to iterate once per value up to and including the argument, and use a temp array each iteration to build the sub array
	for(let i = 1; i<=size; i++){
		let tempArr = []
		//for loop that iterates from 1 to and including argument value, each iteration multiplying the parent scopes iteator and then pushing that value to a temp array that will get pushed into the result array when completed
		for(let j = 1; j<=size; j++){
			tempArr.push(j*i)
		}
		//at the end of each parent loop iteraion add the child loops temp array into the result array
		result.push(tempArr)
	}
	//return the array
	return result
}
console.log(multiplicationTable(3))

//My code workd and it was close to the best practice answer:
// multiplicationTable = function(size) {
//   var result = [];

//   for (var i = 0; i < size; i++) {
//     result[i] = [];
//     for(var j = 0; j < size; j++) {
//       result[i][j] = (i + 1) * (j + 1);
//     }
//   }
  
//   return result
// }
//Instead of pushing the procuct of the parent iterator times the child iterator, which in my function both started at 1, they use a starting iterator of 0 so they can use the iterator to fill the index positions of the arrays with a value of parent iterator +1 times child iterator+1.
//I didn't see anyone use recursion in the solutions section and I ran out of time to attempt it.
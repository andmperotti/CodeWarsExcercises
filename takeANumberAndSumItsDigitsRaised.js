//https://www.codewars.com/kata/5626b561280a42ecc50000d1

//argument is 2 integers, which represent the starting and ending values of a range, inclusivly.
//output will be an array of values that are integers that when broken into an equation of the leftmost to the first power, second leftmost to the second power, thirdmost to the thid power, etc summed together equals the same value.
//examples: (10,150)=[89, 135]

function sumDigPow(a, b) {
	//we need to make an array usign the 2 integer arguments, we'll use array.from
	let integerRange = Array.from({ length: b - a + 1 }, (_, i) => a + i);
	//we'll need a temp variable that stores results
	let result = []
	//we'll use iteration to cycle through the range of values (temp array), if the return from the nested iteration is equal to the integer before split, then add that integer to the result temp array variable
	for(let i = 0; i<integerRange.length; i++){
		//split the integer into a sub array by converting it to a string, then itrate over that sub array to calculate the sum of integers to their exponents, if that sum is equal to the integer before split then add it to the result array variable
		if(String(integerRange[i])
			.split('')
			.reduce((acc,cur,ind)=>acc+Math.pow(Number(cur),ind+1),0)
			===integerRange[i]){
				result.push(integerRange[i])
		}
	}
	
	//return the temp result variable
	return result
}
console.log(sumDigPow(1,100))


//this code worked, however it is indeed a mess, but I wanted to go declerative for once, but I'm sure there was a better way to do this.
//The best practice answer actually used a for loop nested within the same initial for loop, using a variable to accumulate each split elements exponent value of each integer.
// function sumDigPow(a, b) {
//   var arr = [];
//   for (var i = a; i <= b; i++) {
//     var sum = 0;
//     for (var j = 0; j <= String(i).length; j++) {
//       sum += Math.pow(parseInt(String(i)[j]), j+1);  
//       if (sum == i) arr.push(i);
//     }
//   }
//   return arr;
// }
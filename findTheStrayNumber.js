//https://www.codewars.com/kata/57f609022f4d534f05000024


// DESCRIPTION:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


//P: an array with an odd number length, with all the same value except one element, says length of the array will be >=3
//R: the value that is not the same as the rest of the array
//E:[1, 1, 2] ==> 2, [17, 17, 3, 17, 17, 17, 17] ==> 3
//Pseudo code

function stray(numbers) {
	//temp variable for checking
	let dupeChecker = numbers[0]
	//if statement that checks the first element to the second or third for equality; to rule it out from being the foreign value
	if(dupeChecker===numbers[1]||dupeChecker===numbers[2]){
		//loop through the array and check if each value is not equal to the temp variable value (here being numbers[0]), and return if not equal
		for(let i = 1; i<=numbers.length-1; i++){
			if(dupeChecker!=numbers[i]){
				return numbers[i]
			}
		}
	}else{
			//change the temp variable to the second element in the array and run  the loop to see what value does not equal that temp variable/second elmeent
			dupeChecker = numbers[1]
			for(let i = 0; i<=numbers.length-1; i++){
				if(dupeChecker!=numbers[i]){
					return numbers[i]
				}
			}
		}
}

//first thought it to create a temporary variable and have it bound to the first value of the array
//loop through the array;
//use an if statement that checks if the temp variable which is set as the first elements value, is equal to the second element or the third element. If so then loop through the array looking for the element that does not equal that temp variable/first element value.
//else change the temp variable to be equal to the second elements value then run a for loop to check for the value that does not equal the temp variables value.

console.log(stray([1,1,1,2,1]))


//This worked, however I'm sure there's a much shorter version


//best practice:
// function stray(numbers){
//   for (var i in numbers){
//      if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
//   }
// }
//for loop using the in operator, using 'i' as the iterator variable
	//if the index of the current iteration elements value is equal to the last index of the iteration elements value, return that element.
//I didn't think of this but it makes sense, this for loop iterates over each element and when it finds an element whose value returns the same index when using indexOf and lastIndexOf it returns it; because that means there's only one of that value in the array.
//I'll add this to my Anki for further rememberance of the pattern of using the index's to check for the single value element.
//https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// DESCRIPTION:
// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


//argument will be a string made up of letters of either case and digits.
//output will be a string that describes the elements that have duplicate occurences
//an example would be: 'ABBA' => 2 ('A' and 'B' each occur twice), the Instructions make it seem that there needs to be a description string but the test cases/ sample tests in the challenge really only use the integer response

function duplicateCount(text){
	//convert text to lowercase
	text = text.toLowerCase()
	//iterate through string to check whether the currenct element in the iteration exists previous to the current iteration element
		//if so add a value to a variable that will be returned after iteration is complete, to satisfy the required return value.
	let result = 0;
	for(let i = 0; i<text.length; i++){
		if(text.substring(0,i).includes(text.charAt(i))){
			result +=1
		}
	}
	return result
}
console.log(duplicateCount('ABAA'))

function duplicateCount(text){
	//convert argument to all lowercase
	//interate over argument and create an object that holds each unique element as a property which increments those element properties values each time an occurenece of the element is found
	//use Object.keys() to create an array of properties.....
}

//ran out of time, so looked at solutions
//bestest practice answer used regex which I've been advised not to learn just yet
//second best:
// function duplicateCount(text){
//   return text.toLowerCase().split('').filter(function(val, i, arr){
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }
//This function turns the argument elements into lowercase, then into an array using split, iterates over that array using filter() to create a sub array of elements that appear more than once, by checking if the iteration value is the second occurence of the value in the argument array. (the first element iteration would not make it through the filter callback function, but a second or later occurence would, therefore filter is makign an array of elements that occur more than once), and the return value is the length of that array created by filter
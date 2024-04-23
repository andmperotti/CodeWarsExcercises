//https://www.codewars.com/kata/550498447451fbbd7600041c
// DESCRIPTION:
// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.




//At first I tried to iterate through the 1st array and check if their squared values exist in array2 using array2.includes(array1[i]*array1[i]), however that doesn't properly check for multiples it just finds one value in the 2nd argument multiple times and thinks it's sufficient.
//So I'll sort both arrays and then loop over array1 and check if the same index position === array1[i]*array1[i]
//I had followed the for loop with an if statement that returned false if either argument was null and realized I needed to put it before the for loop
//I submitted this function below and it passed, however it never tested it's remark of using an object instead of an array...

function comp(array1, array2){
	//test if either argument is null
	if(array1===null||array2===null){
		return false
	}
	//sort both objects, this changes them globally not just inside this functions scope
	array2.sort((a,b)=>a-b)
	array1.sort((a,b)=>a-b)
	//iterate over array1, and check if the square of the current index's value is in the same index of array2
	for(let i = 0; i<array1.length; i++){
		if(array2[i]!==array1[i]*array1[i]){
			return false
		}
	}
	return true
}
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))

//best practice answer was very similar, it used an if statement to check the arguments for null, then sorted both arguments, and returned the output of running every() on a mapped array of squared array1 elements if they were the same index values as array2.

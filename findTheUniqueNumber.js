//https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// DESCRIPTION:
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.



//if we sort the array then the unique value will be at either the beginning or end of the array
//then we can check the first 2 elements for equality and if so then return the last element, otherwise return the first element because we sorted and the first element != the second in the array means our unique value is at the zero index.

function findUniq(arr) {
	//sort in ascending
	arr.sort((a,b)=>a-b)
	//check for equality from the first 2, if so our unique value is the last element
	if(arr[0]==arr[1]){
		return arr[arr.length-1]
	}else{
		//otherwise if no equality between the first two then our unique value is the last element
		return arr[0]
	}
}
console.log(findUniq([2,2,1,2,2]))

//My answer worked however I'm sure there's a better way.
//Best practice is actually very much the same code, instead of an if else they use a ternary to check the first element against the second element and pop off the last if equality was found, otherwise they return the first element.
//second best answer used the find method from the Array object to pull out the value that it's first index is equal to its last index, this is the kind of solution I didn't think of. I'll add these 2 to my Anki deck.
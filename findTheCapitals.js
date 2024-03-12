//https://www.codewars.com/kata/539ee3b6757843632d00026b

// DESCRIPTION:
// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]


var capitals = function (word) {
	//we'll use split to make an array of the arguments elements
	//Then use map() to iterate over that array and return an array of the index of capital letters, by checking if each iterations value is in a string of all capital letters
	//We'll then use filter to remove the undefined values since map runs for all elements and above was adding index if a letter was present in the capital letters string but undefined if it was not.
	return word.split('').map((letter, index)=>{
		if('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letter)){
			return index
		}
	}).filter((element)=>element!=undefined)

};
console.log(capitals("CodEWaRs"))

//Using split map and filter was the third best voted practice, the highest voted best practice answer built an array, used a for loop to iterate over each letter in the word argument and if that letter was === letter.toUpperCase() then added the iterator value to the array aka that letters indice value, after iteration through the argument the array was returned.
//I did think about using a for loop but I just thought there had to be an easier path using array higher order methods, I guess not.
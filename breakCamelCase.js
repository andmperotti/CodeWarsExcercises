//https://www.codewars.com/kata/5208f99aee097e6552000148

// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



//arguments seem to be strings of camelCase syntax words
//output would be a new string that is the result of breaking apart the camelCase words with a space; camel Case
//some examples: "iLoveMath" => "i Love Math", "catDogFish"=>"cat Dog Fish"


function solution(string) {
	//to iterate over the letters of the argument string, we'll split the argument into an array
	let splitString = string.split('')
	//iterate over the letters, if a capital letter is found, use splice at that position to insert a space, also when that happens you need to increment again because you're adding a space before the capital letter and if you don't incremenet the iterator then the loop will be continually stuck adding spaces because when we add a space before the capital letter the loop checks the next index which is now the capital letter.
	for(let i = 0; i<splitString.length; i++){
		if(splitString[i]===splitString[i].toUpperCase()){
			splitString.splice(i,0,' ')
			i++
		}
	}
	//join the arrray back into a string
	let result = splitString.join('')
	//return the string
	return result
}
console.log(solution('camelCase'))

//my solution worked
//best practice answer used regex and replace(), which does look very easy but I've been advised to not learn regex just yet.
//second best answer split the string into an array and called map on that array which checked for capital letters and if found added a space to them, then returned the join()ing of that array. I didn't think to just add a space to the single element in the array, not sure why they used map which creates a new array since the propmt didn't mention to not alter the original argument.
//https://www.codewars.com/kata/57faf12b21c84b5ba30001b0
//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.

function remove (string) {
	let tempArr = string.split('!')
	tempArr.push('!')
	let result = tempArr.join('')
  	return result
}
console.log(remove('a!l!o!'))
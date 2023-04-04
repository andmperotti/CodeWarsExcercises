//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
//Complete the solution so that it reverses the string passed into it.

//'world'  =>  'dlrow'
//'word'   =>  'drow'
//I'm thinking I can build a for loop that iterates from back to front and use a temporary variable inside the function scope to create the reverse string
function solution(str){
	let result = '';
	for(let i = str.length-1;i >= 0; i--){
		result += str[i]
	}
  return result
}

console.log(solution('world'))
console.log(solution('word'))
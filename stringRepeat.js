//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
*/

function repeatStr (n, s) {
	let restult = '';
	for(let i = 0; i<n; i++){
		restult+= s
	}
  return restult;
}

console.log(repeatStr(5, "peepo"))
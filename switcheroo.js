//https://www.codewars.com/kata/57f759bb664021a30300007d

// DESCRIPTION:
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
	//string elements are immutbale; arrays are not
	//change string into an array
	x=x.split('')
	//iterate over array and change a's to b's and vice versa, using map filter on array
	x=x.map(letter=>letter==='c' ? 'c' : letter==='a' ? 'b' : 'a')
	//then change array back into a string and return
	return x.join('')
}
console.log(switcheroo('bccaba'))

//refactored to use less lines:
function switcheroo(x){
  return x.split('').map(letter=>letter==='c' ? 'c' : letter==='a' ? 'b' : 'a').join('')
}

//best practice used regex, however I've been told to not learn regex as that will reduce learning more scope of operations in programming.
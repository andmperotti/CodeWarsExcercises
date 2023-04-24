//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

function digitize(n) {
	return n.toString().split('').map(Number).reverse()
}
console.log(digitize(35231))

//took me ten minutes and to google a bit until I saw an example use the Number()
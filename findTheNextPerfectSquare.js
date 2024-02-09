//https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square
function findNextSquare(sq) {
 	if(Math.sqrt(sq)===Math.floor(Math.sqrt(sq))||Math.sqrt(sq)===Math.ceil(Math.sqrt(sq))){
 		return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
 	}else{
 		return -1;
 	}
}
console.log(findNextSquare(144))

//As I understand it, a perfect square means that when we check its square root we'll find a whole number, not a decimal/float.
//I could check the square root of sq against the outcomes of Math.floor(Math.sqrt(sq)) or against Math.ceil(Math.sqrt(sq))
//As we need to return the next perfect square, we'll return Math.sqrt(sq)+1 multiplied by itself if our conditional above was true.
//else we'll return -1 meaning the sq value was not a perfect square

//above we passed in 144 which is a perfect square of 12, and our equation then returned the next perfect square which was 169, which was 13 squared

//Although my anser did work I see there was a better way to write this
// function findNextSquare(sq) {
//   return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
// }
//They used modulous to check if the square root of the argument was an integer and not a float, %1. 0 would be the returned value of that expression if it was not an integer, therefore returning the -1 from the ternary operator syntax telling our function user it was not an integer. Else returned the square root of the argument +1 then multiplied by itself; by using the pow method from the Math object.
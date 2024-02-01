//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

//Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

//Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	if(n==1){
		return 1
	}else{
		return rowSumOddNumbers(n-1)
	}
}
rowSumOddNumbers(42)
//base case = row with 1 in it
//next would be the previous value plus 2 to it and then another plus 2 to it
//next would be the previouse value plus 2 to it, then another plus 2 to it, then another plus 2 to it

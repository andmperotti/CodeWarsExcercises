//https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

 function sumOfDifferences(arr) {
 	let result = 0;
 	for(let i = 0; i < arr.length-1; i++){
 		result +=  Math.abs(arr[i]-arr[i+1])
 	}
 	return result
}
console.log(sumOfDifferences([1,2,3]))
//took me a few tries because I wasn't sure how to handle the last element but then I thought well if we limit the condition to one less element that should stop the looping before last element - nothing, and yes it worked.
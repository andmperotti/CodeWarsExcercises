//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
function firstNonConsecutive (arr) {
	let tempEle = arr[0];
	for(let i = 1; i<arr.length; i++){
		if(arr[i]!=tempEle+1){
			return arr[i]
		}
		tempEle=arr[i]
	}
	return null
}
console.log(firstNonConsecutive([1,2,3,4,6]))

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// }
//This was the best practice way to do the problem, mine just used a few more lines of code.
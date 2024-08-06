//https://www.codewars.com/kata/576bb71bbbcf0951d5000044
function countPositivesSumNegatives(input) {
  let result = []
  //check if argument array is empty, if so return empty array, otherwise go about calculating # of positive elements and sum of negative elements
  if(Array.isArray(input)&&input.length>0){
  	//add element for positive integer count to result:
  	result.push(+0)
  	//add element for negative integer sum to result:
  	result.push(0)
  	//iterate over argument array and count positive integers together at the first element of result array, sum together negative elements into the second element in the result array
  	for(let i = 0; i<input.length; i++){
  		if(input[i]>0){
  			result[0]+=1
  		}else if(input[i]<0){
  			result[1]+=input[i]
  		}
  	}
  }else{
  	return []
  }
return result
}
console.log(countPositivesSumNegatives(null))


//8/5/24 I went over this challenge again and came up with this code:
function countPositivesSumNegatives(input){
    return input!==null&&input.filter(e=>e!==0).length>0 ? 
    [input.filter(e=>e>0).length, input.filter(e=>e<0).reduce((acc,cur)=>acc+cur)] 
    : []
}
//which is a lot shorter, and includes an additional check on the argument arrays values in relation to if they are === 0, because "0 is neither positive nor negative".

//looking at second best practice answer which uses very similar code, I did not use an intial value in the reduce method when summing the negative values together, which now I see is needed, so I'll add this challenge to my Anki.

//second best practice:
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }
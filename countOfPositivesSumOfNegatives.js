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
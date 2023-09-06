//https://www.codewars.com/kata/58ca658cc0d6401f2700045f
function findMultiples(integer, limit) {
  let resultArr = [];
  for(let i = 1; (integer * i) <= limit; i++){
  	resultArr.push(integer * i)
  }
  return resultArr
}
 
console.log(findMultiples(2,5))

/*
function findMultiples(int,limit){
  let result = []
  
  for (let i = int; i<=limit ; i+=int)
    result.push(i)
    
  return result
}
*/
//was the best practice answer
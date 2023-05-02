//https://www.codewars.com/kata/5899642f6e1b25935d000161

function mergeArrays(arr1, arr2) {
  let merged = arr1.concat(arr2)
  merged.sort((a,b)=>a-b);
  let uniqueSorted = [];
  for(let i = 0; i<merged.length; i++){
  	if(!(uniqueSorted.includes(merged[i]))){
  		uniqueSorted.push(merged[i])
  	}
  }
  return uniqueSorted
}

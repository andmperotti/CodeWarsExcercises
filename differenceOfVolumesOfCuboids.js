//https://www.codewars.com/kata/58cb43f4256836ed95000f97
function findDifference(a, b) {
  return a.reduce((accum, current)=> accum*current) - b.reduce((accum,current)=>accum*current)
}
console.log(findDifference([2,3,4],[3,5,3]))


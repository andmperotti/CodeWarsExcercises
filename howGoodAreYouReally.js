//https://www.codewars.com/kata/5601409514fc93442500010b
function betterThanAverage(classPoints, yourPoints) {
	let averageScore = classPoints.reduce((accum,current)=>accum+current,0)/classPoints.length
  return yourPoints>averageScore
}
console.log(betterThanAverage([1,2,3,4,5],4))
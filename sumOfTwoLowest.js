//https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {  
  numbers.sort((a,b)=>a-b)
  return (numbers.shift()+numbers.shift())
}
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))

//however that would remove the two lowest at the same time
//You can just return numbers[0]+numbers[1] after the sort
//https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
  return numbers.split(' ').length>1 ? numbers.split(' ').sort((a,b)=>b-a).filter((e,index,arr)=>index==0||index==arr.length-1).join(' ') : `${numbers} ${numbers}`
}
console.log(highAndLow("42"))
//I could have just split the argument and returned a template literal with the Math.max and Math.min space separated.
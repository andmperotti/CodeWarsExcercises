//https://www.codewars.com/kata/57a5c31ce298a7e6b7000334
function binToDec(bin){
  let binArr = bin.split("");
  binArr.reverse()
  let result = 0
  for(let i = 0; i<binArr.length; i++){
      result += binArr[i]*(2**i)
  }
  return result
}
console.log(binToDec("1001001"))

/* correct way:

function binToDec(bin){
  return parseInt(bin,2);
}

*/
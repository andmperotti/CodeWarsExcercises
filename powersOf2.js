//https://www.codewars.com/kata/57a083a57cb1f31db7000028
function powersOfTwo(n){
  let result = [];
  for(let i = 0; i <= n; i++){
    result.push(i)
  }
  return result.map(x=>2**x)
}
console.log(powersOfTwo(3))
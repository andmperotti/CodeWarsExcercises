//https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
  let z = [];
  for(let i = 1; z.length<n; i++){
  	z.push(i*x)
  }
  return z;
}
console.log(countBy(5, 10))
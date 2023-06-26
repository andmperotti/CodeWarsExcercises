//https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
  let z = [];
  for(let i = 1; z.length<n; i++){
  	if(i%x===0){
  		z.push(i)
  	}
  }
  return z;
}
console.log(countBy(2,5))
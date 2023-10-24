//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
function distinct(a) {
  return Array.from(new Set(a))
}
console.log(distinct([1,2,1,3,2,4]))
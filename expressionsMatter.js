//https://www.codewars.com/kata/5ae62fcf252e66d44d00008e
function expressionMatter(a, b, c) {
  return Math.max(
  	(a*b*c),
  	(a+b*c),
  	(a*b+c),
  	((a+b)*c),
  	(a*(b+c)),
  	(a+b+c))
}
console.log(expressionMatter(1,2,3))
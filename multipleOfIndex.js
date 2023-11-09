//https://www.codewars.com/kata/5a34b80155519e1a00000009
function multipleOfIndex(array) {
  return array.filter((x,i) => x == 0 || x % i === 0)
}

console.log(multipleOfIndex([-49, -55, 1,2,3,4,5, 7]))

//https://www.codewars.com/kata/5a34b80155519e1a00000009
function multipleOfIndex(array) {
  return array.filter((ele, ind, arr)=>ele === 0 || ele%ind === 0)
}

console.log(multipleOfIndex([-49, -55, 1,2,3,4,5, 7]))
console.log(multipleOfIndex([0, 2, 3, 6, 9], [0, 2, 6]))

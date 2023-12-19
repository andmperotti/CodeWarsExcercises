//https://www.codewars.com/kata/573f5c61e7752709df0005d2
function mergeArrays(a, b) {
  return a.filter((ele,index,array)=>!a.slice(0,index).includes(ele)).concat(b.filter((ele,index, array)=>!a.includes(ele))).sort((a,b)=>a-b)
}
console.log(mergeArrays([-111, -55, -1, 0, 1,3,5],[-120, -55, 0, 2, 4, 5]))

//This isn't passing, I'm assuming the challenge wants us to edit the starting array objects and not create other objects using filter. This works but I'll have to come back to it another day to write a version of what it wants.
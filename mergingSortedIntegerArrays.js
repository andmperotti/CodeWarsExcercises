//https://www.codewars.com/kata/573f5c61e7752709df0005d2
// function mergeArrays(a, b) {
//   return a.filter((ele,index,array)=>!a.slice(0,index).includes(ele)).concat(b.filter((ele,index, array)=>!a.includes(ele))).sort((a,b)=>a-b)
// }
// console.log(mergeArrays([-111, -55, -1, 0, 1,3,5],[-120, -55, 0, 2, 4, 5]))

//This isn't passing, I'm assuming the challenge wants us to edit the starting array objects and not create other objects using filter. This works but I'll have to come back to it another day to write a version of what it wants.


//1/3/24 attempt
//After my reading yesterday I know that a set cannot have duplicates, so I think I'll combine both arrays and then sort that result then turn that result into a set.

function mergeArrays(a,b){
  let combinedArr = a.concat(b)
  combinedArr.sort((a,b)=>a-b)
  return new Array(...new Set(combinedArr))
}

console.log(mergeArrays([1,2,4,3], [5,2,4,1,3]))

//Well it didn't accept it as a set so I turned the set back into an array, and I used spread operator which I just thought to try to get rid of the set designation inside the resulting array, I can't quite explain what it's doing but it did return an array sorted and with unique elements.

//As I look at the voted best solution I see they used set with spread operator as well, and they wrote it cleaner, so I'll add this question to my Anki deck for further studying of the syntax of their use.
//I see they created an array using set to remove duplicate values, then used sort on that resulting array.
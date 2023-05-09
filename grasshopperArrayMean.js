//https://www.codewars.com/kata/55d277882e139d0b6000005d

var findAverage = function (nums) {
  let sumNums = Number(0);
  for(let i = 0; i<nums.length; i++){
  	sumNums+= nums[i]
  }
  return sumNums/nums.length
}

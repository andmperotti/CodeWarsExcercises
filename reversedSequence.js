//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = n => {
	let tempArr = []
	for(let i = n; i>0; i--){
		tempArr.push(i)
	}
  return tempArr
};
console.log(reverseSeq(5))
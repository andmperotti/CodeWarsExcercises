//https://www.codewars.com/kata/5641a03210e973055a00000d

//argument is an gloating point integer
//output will be a floating point integer that only uses 2 decimal places
//examples: (5.5589)=>5.56, (3.3424)=>3.34

function twoDecimalPlaces(n) {
	return Number(n.toFixed(2))
}
console.log(twoDecimalPlaces(4.659725356))

//It's been awhile since I used tofixed, so i'll add this challenge to my anki deck for future memorization.
//https://www.codewars.com/kata/55d1d6d5955ec6365400006d

//argument is an integer, which can be positive or negative, or zero.
//ouput will be an integer which is the next multiple of 5 to the argument value, yes even if the argument value is negative.
//examples: 0=>0, 2=>5, -5=>-5, -2=>0

// function roundToNext5(n){
// 	//we'll return the output of Math.ceil(n/5) times 5, Math.ceil(n/5) will calculate a multiplier of 5, for which we then multipy by 5 and get the next closest multiple of 5 of n.
// 	return Math.ceil(5/5)*5
// }
// console.log(roundToNext5(9))

//I actually didn't get this right because I misread the challenge and thought it wanted the closest multiple of 5, so if -4 was the argument then -5 would be the output, or if 2 was the argument then 0 would be the argument. I wasted a lot of time and finally clicked unlock solutions to realize that I had misread. I will try this one again later this week.





//6/26 attempt, did not look at the code above this

//argument is an integer, positive or negative, or even the integer 0
//output will be an integer that is the next closest multiple of 5, unless the argument is a multiple of 5 then that is the output
//examples: 0=>0, 2=>5, -5=>-5, -2=>0

function roundToNext5(n){
	//to find the next multiple of 5 from the argument, we can divide the argument by 5 and round it to the nearest whole integer using Math.ceil() and then multiply that result by 5.
	return Math.ceil(n/5)*5
}
console.log(roundToNext5(-2))

//So I remembered it mostly from yesterday, but I'm sure this same pattern will pop up in another challenge later.

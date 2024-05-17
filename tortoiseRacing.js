//https://www.codewars.com/kata/55e2adece53b4cdcb900006c

// DESCRIPTION:
// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1" for others.

// Examples:
// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"
// Note:
// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"




//arguments we receive are an objects speed per hour, a second objects speed per hour, and the amount of lead space the first argument has over the second argument.
//output will be an array with 3 elements representing the hours, minutes, and seconds it took for the 2nd argument object to catch the first.
//example: 720, 850, 70 =>[0,32,18]

function race(v1, v2, g) {
	if(v1>=v2){
		return null
	}else{
		let v2Difference = v2-v1
		let thing = g/v2Difference
		let hours = Math.trunc(thing)
		let notHours = thing-hours
		let minutes = notHours*60/1
		let seconds = (minutes-Math.trunc(minutes))*60/1
		return [hours, Math.trunc(minutes), Math.trunc(seconds)]
		
	}
}
console.log(race(720, 850, 70))
console.log(race(80, 91, 37))
console.log(race(80, 100, 40))
console.log(race(720, 850, 37))

//this answer works for the 4 test cases but I can't seem to figure out what method they want me to use, their instructions say turtles don't care about fractions. In the test case for the last above test it wanted a 4 for seconds however it was 4.6 which plays into a "basic test later" where they clearly round the 59 seconds to 60 and increment the minutes. So no I did not complete this challenge.

//best practice answer used regex which I have still not learned so ...
//second best answer:
// function race(v1, v2, g) {
//   if (v2 < v1) { return null; }
  
//   var seconds = Math.floor(g / (v2 - v1) * 3600);
//   var h = Math.floor(seconds / 3600);
//   var m = Math.floor((seconds - h * 3600) / 60);
//   var s = seconds - h * 3600 - m * 60;
  
//   return [h, m, s];
// }
//this is what I had planned to do until I looked at the hint section of the challenge mention googling convert a decimal to time...
//this function creates a variable 'seconds' which is the result of g divided by v2-v1 then multiplying it by 3600 to give us the value per second that the 2nd argument is catching up on the 1st argument object, rounded down to its nearest whole integer. (how many seconds it would take for v2 to catch v1)
//variable h is the result of seconds divided by 3600 then rounded down to the nearest whole integer, giving us the amount of hours 
//variable m is the rounded down to the nearest whole integer of taking the amount of time it takes in seconds to catch up and subtracting h from it the calculation of hours times 3600 giving us the seconds remaining after hours and then dividing by 60 to give us the minutes to catch up
//variable s is the time in seconds, by using the total time in seconds to ctach up and subtracting the amount of seconds in the hours and subtracting the amount of minutes by muliplying the minutes to get the number of their seconds

//I'll try this challenge again in two weeks.
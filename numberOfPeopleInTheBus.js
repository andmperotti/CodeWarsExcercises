//https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// DESCRIPTION:
// There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
//sample input: [[10,0],[3,5],[5,8]]
//samples output: 5





var number = function(busStops){
	let totalOn = busStops.map(busStop=>busStop[0]).reduce((acc,group)=>acc+group,0)
	let totalOff = busStops.map(busStop=>busStop[1]).reduce((acc,group)=>acc+group,0)
	return totalOn-totalOff
}
console.log(number([[10,0],[3,5],[5,8]]))
//first thought is to use 2 variables, each resembling the total passsengers that have gotten on the bus, and the total that have gotten off the bus
//Can use map to go through each sub array and pull each value out for either variable
//use reduce to then take those variables and sum up their values
//return the number gotten off from the number gotten on, and you'll have the total number of pasengers left


//here is the best practice answer:
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
//I've seen this technique used before but haven't quite used it myself...
//the reduce is ran on the entire argument object, but its iterator value is an array object consisting of 2 variable, 'on' and 'off', as I understand it it's telling the reducer hey there are 2 elements per sub array of the busStops array, use these 2 variables to represent each element in the sub array
//then use your accumulator variable here named 'rem', for remainder, and and the number of each sub arrays 'on' value and then subtract the sub arrays 'off' value, also start this 'rem' variable with a value of 0
//If that's correct then I understand perfectly, will add this challenge to my Anki for further studying of that particular section.
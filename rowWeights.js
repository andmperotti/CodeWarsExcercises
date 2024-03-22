//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

// DESCRIPTION:
// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

function rowWeights(array){
	//Going to need to iterate through argument array object, and += each even and first element to team one, and each odd element starting at 1 to team2
	//begin by declaring an array with two elements, both being 0
	let result = [0,0]
	//this way even if we only have 1 element in the argument array our result will suffice according to the example of rowWeights[80]=>][80, 0]
	//using forEach on the array argument object we'll iterate and conditionaly add each element to either team1 or team2; result[0] or result[1]
	array.forEach((ele,ind)=>ind%2===0? result[0]+=ele : result[1]+=ele)
	//return accumulated answer via result array object
	return result
}

console.log(rowWeights([1,2,3,4]))

//best practice answer used 4 iterators... they created 2 integer variables from the result of calling filter and then reduce to pull out values for each team, and then returned a final result. I actually think my code is more straightforward and easier to follow and only iterates once.
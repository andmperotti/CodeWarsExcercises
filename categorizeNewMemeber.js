//https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

// DESCRIPTION:
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
	return data.map(member=>member[0]>=55&&member[1]>7 ? "Senior" : "Open")
}
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))
//First off I noticed the output wanted was an array, so my choices of methods to run eliminated forEach.
//Since a result was needed for each sub-array then filter() was elminated and I chose map() to work with
//using member as the iterator variable name we iterated through the argument object for the data parameter variable and checked each sub-array's first value which represented a members age if it was greater than or equal to 55 AND if their handicap is greater than 7. If both evaluated to true then we returned "Senior" to the resulting array for that 'member', otherwise if either evaluated to false then we returned "open" for that member.
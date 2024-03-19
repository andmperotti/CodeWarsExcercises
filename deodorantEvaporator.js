//https://www.codewars.com/kata/5506b230a11c0aeab3000c1f

// DESCRIPTION:
// This program tests the life of an evaporator containing a gas.

// We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

// The program reports the nth day (as an integer) on which the evaporator will be out of use.

// Example:
// evaporator(10, 10, 5) -> 29
// Note:
// Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

function evaporator(content, evap_per_day, threshold){
	//lets convert the % arguments to percentage
	evap_per_day = evap_per_day/100
	threshold= threshold/100
	//create a variable which stores the container size
	let containerVolume = content
	//declare a variable that holds the number of days
	let days= 0
	//for loop, declare an iterator variable for incrementing, stopping condition will be when the content is = or less than the threshold of the container. Each iteration results in reducing content by it's daily reduction amount(evap_per_day *content), and increments the days variable.

	for(let i = 0; content>(threshold*containerVolume); i++){
		content-=evap_per_day*content
		days+=1
	}
	//return days which represents the number of days the product lasts for
	return days
}
console.log(evaporator(10, 10, 5))

//After looking over other answers I wanted to change my answer but will leave it however I could have used fewer lines of code if I instead didn't use the content argument and instead created a variable which just tracks percentage of container.
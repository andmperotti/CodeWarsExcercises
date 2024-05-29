//https://www.codewars.com/kata/52742f58faf5485cae000b9a

// DESCRIPTION:
// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// It is much easier to understand with an example:

// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.




//argument will be an integer >=0, and represents a number of seconds
//output will be a string explanation of the amount of seconds converted to a combination of years, days, hours, minutes and seconds. The format of the output will differ depending on several rules listed above; if a category has a singular value then the term following it will be singular, ie: 1 second. Commas will trail years and days but not minutes. Spaces will be used after each integer and before the term of their duration like 'seconds', and spaces after terms before commas when used, if i forgot a specifc use case just imagine how you would type the sentence in english. "1 hour, 52 minutes and 10 seconds"
//examples: 0=>'now', 12=>'12 seconds', 62=>'1 minute and 2 seconds'




function formatDuration (seconds) {
	//create a temp array that saves converted values for each possible metric (years, days, hours, minutes and seconds) only using the digits to the left of a decimal of the result converting to that metric, more on this later.
	let convertedSeconds = []
	//Let's divide the argument by the number of seconds in a year and if that value is greater than 0, and teh integer that's to the left of the resulting floating number to the temp array or zero. Math.trunc is used to return only the integer part of the resulting floating value, which will give us the complete number of years.
	convertedSeconds.push(Math.trunc(seconds/31536000))
	//to calculate days we'll have to subtract the seconds used to calculate years, so we'll use modulous with the seconds in a year and get the remainder of seconds after calculating years, then divide that remainder by the number of seconds in a day and use Math.trunc to return only the integer part of the float result
	convertedSeconds.push(Math.trunc((seconds%31536000)/864000))
	//to convert the argument to hours left we'll have to remove the already used above arguments, however we can use modulous with days and get hours left
	convertedSeconds.push(Math.trunc((seconds%864000)/3600))
	//we'll need to convert the seconds to find the number of minutes
	convertedSeconds.push(Math.trunc((seconds%3600)/60))
	//and finally we'll do similar calculation this time finding the remainder of arguments seconds modulos the number of seconds in minutes and the remainder will represent seconds
	convertedSeconds.push(Math.trunc(Math.trunc(seconds%60)))
	//return the concatenative results of each element in the array with their respective terms (years, days, minutes and seconds)
	
	//now that we have an array with respective valus you need to format the output of the string, we'll build separate strings and then concatenate them to form the resulting string
	let hourString = convertedSeconds[0] === 1 ? `${convertedSeconds[0]} hour` : convertedSeconds[0]>1 ? `${convertedSeconds[0]} hours` : ''
	let minuteString = convertedSeconds[1] ===1 ? 
}
console.log(formatDuration(62))

//ran out of time for this challenge, I couldn't think of a way to structure logic to suffice the rules depending on certain values and their effedts on the sytnax of the return string.

//best practice answer: 
// function formatDuration (seconds) {
//   var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
//       res = [];

//   if (seconds === 0) return 'now';
  
//   for (var key in time) {
//     if (seconds >= time[key]) {
//       var val = Math.floor(seconds/time[key]);
//       res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
//       seconds = seconds % time[key];
//     }
//   }
 
//   return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
// }
//this function declares a variable that is an boject that holds the number of seconds for each metric we need to evaluate the argument to, and also declares a variable that holds an empty array
//then uses an if statement to suffice one of the rules, if the argument is 0 then return 'now'
//then uses a for in loop to loop over each property in that object they made and if seconds is greater than or equal to the value of that enumerable then:
	//creates a variable 'val' which is the rounded down result of seconds divided by the value of that enumerable property, 
	//then pushes into that temp array variable a string consisting of either the the 'val' variable with a space and the enumberable property with a trailing s, or 'val' with a space and the enumberable propety.
	//then reassigns seconds to hold the value remaining after finding the value from this iteration of the for loop within the if statement
//using a ternary statement returns a string using .join() and replace() with regex or just returns a single element from the array it built... i don't know regex yet

//I'll come back to this later when I've learned regex, mentor still hasn't told me to learn it though.
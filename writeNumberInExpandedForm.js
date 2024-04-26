//https://www.codewars.com/kata/5842df8ccbd22792a4000245

// DESCRIPTION:
// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.



//Inputs: a whole number greater than 0
//Output: string in exapanded form
//examples: 12=> '10 + 2', 42=> '40 + 2'


function expandedForm(num) {
	//create a variable to hold the eventual result string
	let result = ''
	//create a variable that turns the argument from a number into a string and then into an array
	let numsToSplitArray = num.toString().split('')
	//create a variable which holds the original length of that array that we'll use to calculate each numbers trailing zero's
	let numsLength = numsToSplitArray.length
	//use a for loop to iterate through the array of split integers
	for(let num of numsToSplitArray){
		//if the current element of the array is not a zero then:
		if(num!=0){
			//concatenate to the result string the current number with an amount of trailing zeros(length here includes the number, so it only adds length-1 number of zeros the 1 representing the current elements value), and add a space then '+' then another space
			result+=`${num.padEnd(numsLength, 0)} + `
			//decrement the length variable, so trailing values will have the correct amount of zeros added to them
			numsLength-=1
		}else{//if the current value is equal to zero
			//decrement the length
			numsLength-=1
		}
	}
	//remove the last numbers ' + '
	result =result.substring(0, result.length-3)
	//return the string
	return result
}
console.log(expandedForm(11))

//Well I did find a workable solution, however it's messy and nowhere close to best practice answers. 
//The best practice voted answer:
// const expandedForm = n => n.toString()
//                             .split("")
//                             .reverse()
//                             .map( (a, i) => a * Math.pow(10, i))
//                             .filter(a => a > 0)
//                             .reverse()
//                             .join(" + ");
//Converts the argument integer into a string and then splits it to create an array. It then reverses the array, and calls map to build a new array of values that are equal to each value multiplied by the result of 10 to the index power, then reverses that array, and joins them back into a string using join() with a glue of " + ". I honestly didn't think about that at all. Will add this challenge to my Anki deck for further studying.
//https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// DESCRIPTION:
// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]



//argument is an integer, which represents the number of floors to build in the tower
//output will be an array of strings, these strings represent floors of the tower, so if asked for 3 our output would be an array consisting of 3 elements: '*','***','*****'

// function towerBuilder(nFloors) {
// 	//build a temp variable that will hold the floors; this is an array that will be returned at the end of the function
// 	let resultTower = []
// 	//build the floor via a for loop that runs until the tower has as many floors as the argument asks for
// 		//to populate each floor with the appropriate amount of asterisks we'll use a temp variable to start the floors with one * and then increment it by 2 per each floor. 
// 			//For the spacing to center the floors populance we'll use padStart and padEnd and we'll pass them an expression of nfloors times two minus 1 which gives the populance count for the last floor, then subtract from that the count of the populance on that floor and divide by two giving us the proper number of spaces in front and behind in the populance to pass to padStart and padEnd
// 	let populater = 1
// 	for(let i = 1; i<=nFloors; i++){
// 		//create floor and populate with asterisks needed
// 		let floor = '*'.repeat(populater)
// 		//add starting space
// 		floor=floor.padStart((nFloors*2-1-populater)/2)
// 		//add ending space
// 		floor=floor.padEnd((nFloors*2-1-populater)/2)
// 		//push floor to array
// 		resultTower.push(floor)
// 		//increment asterisk counter
// 		populater+=2
// 	}
// 	//return the array
// 	return resultTower
// }
// console.log(towerBuilder(5))
//I couldn't get padEnd to add to the back of each string, I had previously chained the padEnd after calling padStart and thought that was a problem, but here it's still not working... I've ran out of time and am going to look at the solutions...

//the two best answers:
// function towerBuilder(nFloors) {
//   var tower = [];
//   for (var i = 0; i < nFloors; i++) {
//     tower.push(" ".repeat(nFloors - i - 1)
//              + "*".repeat((i * 2)+ 1)
//              + " ".repeat(nFloors - i - 1));
//   }
//   return tower;
// }
//and:
// function towerBuilder(n) {
//   return Array.from({length: n}, function(v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }
//the first built an array and used a for loop with an iterator that started at 0 and ran until the iterator was === nFloors value, each iteration it pushed into the array a string built from three stings that repeat were called on. So they built the first section of spaces then added the string of asterisks and then added the trailing spaces string. They used an expression of nFloors-i-1 to create the space before and after the asterisk
//the second best answer, returned an array by using from method which builds an array here passing it an object it uses the objects length properties value to build n elements into the array. the function that follows it alters the elements. the first argument is the currenct element from the array, the second is the index of that current element. So the function builds an amount of spaces depending off the total floors fo the tower minus the current elements index minus 1. then adds the spaces around a repeat method call which builds the amount of asterisks by using the index and returning the index + index + 1 which gives the populance of asterisks to the floor.

//before this challenge I didn't know that Array.from() had a second argument, which is a function that is run on each element of the array built from the first argument.

//I'll try this challenge again in a week or two.








//5/22 attempt:

//argument is an integer that represents the number of floors in the tower we'll build
//output is the theoretical tower, which is actually an array of strings when printed on new lines should look like a tower
//example: 3=> [
//'  *  ',
//' *** ',
//'*****'
//]


function towerBuilder(nFloors) {
	//buil a temp array that will be the return object of this function
	let resultTower = []
	//create another temp variable to keep track of *'s, which are used to fill in levels of the tower in incrementing fashion
	let asteriskCounter = 1
	//use a for loop to iterate nFloors amount of times and create a string made up of the current asteriskCounter value and concatenate space before and after the asterisk/s in the amount of (nfloors*2-1-asteriskCounter)/2 for each the leading and trailing space string,that'll be pushed into the temp array. 
	for(let i =1; i<=nFloors; i++){
		resultTower.push(`${' '.repeat((nFloors*2-1-asteriskCounter)/2)}${'*'.repeat(asteriskCounter)}${' '.repeat((nFloors*2-1-asteriskCounter)/2)}`)
		asteriskCounter+=2
	}
	//return array object
	return resultTower
}
console.log(towerBuilder(5))
//this worked, I remembered one of the best practice answers used string concatenation, so I knew to build three separate strings to reach the result.
console.log()
towerBuilder(5).forEach(row=>console.log(row))
//here's another way to output it without the quotations around the string elements in the array or the square brackets symbolizing the array.
//https://www.codewars.com/kata/569d488d61b812a0f7000015

//argument will be an array of numbers which represents 4 8 segment bits 
//output will be an array of the values reversed
//examples: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]=>[1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]

function dataReverse(data) {
	//we'll need to create 4 sub arrays, place them into an array, and then reverse that arrays elements (sub arrays),then return a flattened array of that array of sub arrays
	//create a temp variable that will hold each sub array
	let result = []
	//use a for loop to iterate over the arguments elements and for each iteration create an array of the next 8 values from the argument and push that array into the 'result' array, increment i up 8 values each iteration
	for(let i = 0; i<data.length; i+=8){
		result.push([data.slice(i,i+8)])
	}
	//return the 'result' variable array reversed and flattened
	return result.reverse().flat(Infinity)
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))

//this code worked, the best practice answer was similar, it used a for loop to iterate in secions of 8, however their loop body code took their temp variable and unshifted into the beginning of it each 8 value segments. They did not use sub arrays either. So they had less work, oh well.
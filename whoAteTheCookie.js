//https://www.codewars.com/kata/55a996e0e8520afab9000055

//argument will be either a string, float or integer, or anything else
//output will be a string with a different result depending on what type of value was given as the argument
//example: 'hi' => "Who ate the last cookie? It was Zach!"

function cookie(x){
	if(typeof x === 'string'){
		return `Who ate the last cookie? It was Zach!`
	}else if(typeof x === 'number'){
		return `Who ate the last cookie? It was Monica!`
	}else{
		return `Who ate the last cookie? It was the dog!`
	}

}

//we'll use an if, else if, else chain to output the desired string

console.log(cookie('poop'))

//My answer was not best practice, was actually fourth best, as there are ways to shorten your code by using a variable which holds the return of checking the typeof x and then using that to set up the return via template literal in a template string. Otherwise similar to ours you could use chainined ternary operators to return different strings depending on argument value.
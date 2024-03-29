//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763

// DESCRIPTION:
// Description:

// We want to generate a function that computes the series starting from 0 and ending until the given number.

// Example:
// Input:

// > 6
// Output:

// 0+1+2+3+4+5+6 = 21

// Input:

// > -15
// Output:

// -15<0

// Input:

// > 0
// Output:

// 0=0


var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if(count<0){
    	return `${count}<0`
    }else if(count===0){
    	return '0=0'
    }else{
    	let sequence = new String()
    	let result = 0
    	for(let i = 0; i<=count; i++){
    		result +=i
    		sequence+=`${i}+`
    	}
    	sequence = sequence.split('')
    	sequence.pop()
    	sequence= sequence.join('')
    	return `${sequence} = ${result}`
    }
  };

  return SequenceSum;

})();
console.log(SequenceSum.showSequence(2))
//SequenceSum is a module pattern...
//showSequence is a function which also exists within SequenceSum and it's where our operational code to calculate the wanted return exists.
//showSequence will use an if, else if, and else statement, this allows us to build a string if the count argument value is <0, and return a specific string which will suffice the required result. The else if will check if the count argument === 0, and return a very specific string for that case.
//the else statement will declare two temporary variables, one which will be the accumulation of integers, the other being a string accumulation of addition steps that brought us to that mathematical result, combining the two in a template literal to meet the challenges output syntax.




//best practice answer is doing the exact same thing as my code.

//I've never seen the syntax used in this challenge in js, I've used constrtuctor functions and classes but I've never seen a module pattern. Today I learned I guess.

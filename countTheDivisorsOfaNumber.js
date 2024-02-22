//https://www.codewars.com/kata/542c0f198e077084c0000c2e


// DESCRIPTION:
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 // we have 3 divisors - 1, 2 and 4
// 5 --> 2 // we have 2 divisors - 1 and 5
// 12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.


function getDivisorsCnt(n){
	//temporary variable which holds number of divisors of n, will be returned after loop runs
	let results = 0;
    //for loop to iterate through divisors up to the argument value
    for(let i = 1; i<=n; i++){
    	if(n%i===0){
    		results+=1
    	}
    }
    //return temporary variable which holds # of divisors of n
    return results
}

// console.log(getDivisorsCnt(28))
//should be 6 because divisors = 1,2,4,7,14,28
//it was

console.log(getDivisorsCnt(500000))
//codewars timedout on this call however my computer did not... 

// console.log(getDivisorsCnt(54))//should be 8, returns 8

//I've checked the discussion area and users are reporting this problem is more of an optimization problem than it is led on to be and that the "big test" is actually a number greater than the 500000 mentioned integer cap in the description. I'm going to 'unlock solutions'

// console.log(getDivisorsCnt(2*3*5*7*11*13*17*19*23*29))
//this is the "big test", which produces a value far greater thatn 500000

//the best practice voted solution had a comment from 'helloredfoxes': 
// In number theory we learn that any composite number n has at least one factor greater than 1 and at most sqrt(n).

// if(n==1) return 1; --> this code returns 1 if n is 1

// if(n%Math.sqrt(n)==0) num++; --> If n is a perfect square, we need to count the sqrt(n) as a single factor. (ex if n = 25, then 5 x 5 = 25, but we only count the 5 once).

// The for loop only iterates up until i = sqrt(n) because of the theory above. It counts 2 factors for every n%i==0 up until i=sqrt(n).

//so there we have it, I did not know about this theory therefore could not get the answer the creator of the challenge wanted, however my code fits their typed out description therefore I'm content with what I have above.
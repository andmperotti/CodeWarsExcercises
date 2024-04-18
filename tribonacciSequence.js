//https://www.codewars.com/kata/556deca17c58da83c00002db

// DESCRIPTION:
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]



//so we have our first 3 values given as sequence, and the 4th value needs to be the sum of the first 3, and as we build this array each value to the 'n'th value will be the previous 3 elements sum.
//we'll use an if statement to check if n is less than or equal to 3, if so then we can return a portion of the 'signature' argument that will suffice their answer
//otherwise we  use a for loop that builds onto a copy of signature by iterating per n value, start the iterator at 3 which would be the fourth index of the result, push the sum of the previous 3 elements of the iterator which make the current iteration value, stopping condition is when the iterator meets the 'n' variables value which would suffice it because our array is zero indexed



function tribonacci(signature,n){
	//temp variable for result array
	let result = []
	//if statement that returns slice of signature
	if(n<=3){
		return signature.slice(0,n)
	}else{
		//start with a copy of the signature argument
		result=signature.slice()
		//use a for loop that starts at the end of signature and iterates up to but not including 'n''s value, zero indexing = suffice count
		for(let i = 3; i<n; i++){
			//push the sum of the previous 3 elements into the array
			result.push(result[i-1]+result[i-2]+result[i-3])
		}
	}
	//return the array
	return result
}

//best practice answer used a for loop which only runs when n is greater than 3, but when it runs its iterator starts at 0 and pushes the sum of the i with i+1 and i+2, either way it returns signature.slice(0,n) therefore they were manipulating the signature variable array object, which I didn't want to do, however their code is a third length of mine and I'm jealous.
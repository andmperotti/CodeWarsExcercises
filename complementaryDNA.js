//https://www.codewars.com/kata/554e4a2f232cdd87d9000038
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
function dnaStrand(dna){
  return dna.split('').map((e,index,arr)=>{
  	if(e=='A'){
  		return e='T'
  	}else if(e=='T'){
  		return e='A'
  	}else if(e=='C'){
  		return e='G'
  	}else if(e=='G'){
  		return e='C'
  	}
  }).join('')
}
console.log(dnaStrand('ATTGC'))

//I chained conditionals over using the replace method because I wasn't sure how I'd call replace multiple times .replace('A', 'T').replace('T', 'A'), and so on without changing back elements I had changed with the prior replace call. I didn't think to use an object with key value pairs to say hey if key then replace with keys value and use it inside one replace call. Also I haven't learned regex as my lecturer has said multiple times to avoid learning it until closer to interviews.
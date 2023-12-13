//https://www.codewars.com/kata/5951d30ce99cf2467e000013
function isPythagoreanTriple(integers) {
  if((integers[0]**2 + integers[1]**2) === integers[2]**2){
  	return true
  }else if((integers[1]**2 + integers[2]**2) === integers[0]**2){
  	return true
  }else if((integers[2]**2 + integers[0]**2) === integers[1]**2){
  	return true
  }else{
  	return false
  }
}

console.log(isPythagoreanTriple([3,4,5]))

//Theres a much better way to write this; sort the array of integers then run the function with that order, once, instead of 3 different orders. 
//I'll add this challenge to my Anki for further studying
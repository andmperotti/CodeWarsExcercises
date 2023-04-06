//https://www.codewars.com/kata/55685cd7ad70877c23000102
//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

console.log(makeNegative(1));    // return -1
console.log(makeNegative(-5));   // return -5
console.log(makeNegative(0));    // return 0
console.log(makeNegative(0.12)); // return -0.12

function makeNegative(numb){
	if(Math.sign(numb)=== 1){
		return Number(-numb)
	}else if(Math.sign(numb)=== -1){
		return numb
	}else if(Math.sign(numb)=== 0){
		return numb
	}
}

//I googled for a method that would check if a integer was positive or negative and lo and behold Math.sign() was the method in the Math build in object that I needed.
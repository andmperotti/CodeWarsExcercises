//https://www.codewars.com/kata/56dec885c54a926dcd001095
//given an integer or a floating-point number, find its opposite
let num = -28;

if(Math.sign(num)=== -1){
	num = Math.abs(num)
}else if(Math.sign(num) === 1){
	num = Math.abs(num) * -1;
}


//putting it into a function
function opposite(number){
	if(Math.sign(number)=== -1){
		number = Math.abs(number)
	}else if(Math.sign(number) === 1){
		number = Math.abs(number) * -1;
	}
	return number
}
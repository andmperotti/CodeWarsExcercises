//https://www.codewars.com/kata/574b3b1599d8f897470018f6
function getRealFloor(n) {
	if(n<0){
		return n
	}else if(n==0||n==1){
		return 0
	}else if(n>12){
		return n-2
	}else if(n>1){
		return n-1
	}
}
console.log(getRealFloor(1))
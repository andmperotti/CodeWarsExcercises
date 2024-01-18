//https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s){
	return s.length %2 ==0 ? s.substring(s.length/2-1, s.length/2+1) : s[Math.floor(s.length/2)]
}
console.log(getMiddle('andrew'))

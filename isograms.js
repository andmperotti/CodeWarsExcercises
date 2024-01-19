//https://www.codewars.com/kata/54ba84be607a92aa900000f1

function isIsogram(str){
	lowerStr=str.toLowerCase()
	return str.length<1 ? true : lowerStr==Array.from(new Set(lowerStr)).join('')
}
console.log(isIsogram('Dermatoglyphics'))

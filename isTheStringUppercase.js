//https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
String.prototype.isUpperCase = function() {
	let strArr = this.split('')
	for(let i = 0; i<strArr.length; i++){
		if(strArr[i]===' '){
			strArr.pop(i)
		}
	}
	return strArr.every(letter=>letter.toUpperCase()===letter)
}
console.log('MBYQ'.isUpperCase())


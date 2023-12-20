//https://www.codewars.com/kata/57cff961eca260b71900008f
function isVow(a){
	return a.map(e=>['a', 'e', 'i', 'o', 'u'].includes(String.fromCharCode(e))?  `${String.fromCharCode(e)}` : e)
}
console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
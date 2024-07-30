//https://www.codewars.com/kata/572b6b2772a38bc1e700007a

//argument will be a string, of anything as far as I can tell.
//output will be the sum of the ascii values of each character that makes up that string
//example: uniTotal('a')=>97, uniTotal('aaa')=>291


function uniTotal (string) {
	return string.split('').reduce((acc,e)=>acc+e.charCodeAt(),0)
}
//we'll break the string into an array of elements and then use reduce to sum each value and obtain those values using charCodeAt() method on the iterator element
console.log(uniTotal('aaa'))

//could have instead created an array of the strings elements by using an array literal and using spread operator within it: [...string].
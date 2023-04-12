//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
	let tempArr = x.split(' ')
	return tempArr.join('')
}


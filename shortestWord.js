//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s){
	return Math.min(...s.split(' ').map(word=>word.length))
}

console.log(findShort('I had a burrito for lunch'))
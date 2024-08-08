//https://www.codewars.com/kata/582746fa14b3892727000c4f

//argument is an array of objects, these objects represent developers and consist of their first name, last names first letter followed by a period, country they're from, continent they're from, age, their predominant programming language
//output will be an an integer that represents how many of these developers are from Europe and their primary programming language is javascript. If there aren't any then return 0.
//example: countDevelopers([{firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'Javascript'}]) => 1, countDevelopers([])=>0

function countDevelopers(list) {
	return list.filter(e=>e.continent==='Europe'&&e.language==='JavaScript').length
}

//we'll use the filter method on the argument array 'list', and give that a callback function which returns true when the iterator element's continent==='Europe' && language==='JavaScript', we'll trail that with the length property to get our integer

console.log(countDevelopers([
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
]))

//I had a small hiccup when I wasn't sure if I use iterator parameter in the body of the callback function to filter to access the values of that iterator object.
//this was the same answer as the best practice.
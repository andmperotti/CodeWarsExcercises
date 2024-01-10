//https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {
  return str.split('').filter(e=>!'aeiou'.includes(e.toLowerCase())).join('');
}
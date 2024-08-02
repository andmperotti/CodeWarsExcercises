//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
  let splitName = name.split(' ')
  let first = splitName[0][0].toUpperCase()
  let second = splitName[1][0].toUpperCase()
  return `${first}.${second}`
}
console.log(abbrevName('andrew perotti'))























//8/2 reattempt, did not look at anything above this line:

//argument is a string consisting of a first and last name space separated, their case could be upper or lower
//output needs to be the first letter of each name capitalized and these separated by a period
//example: (Sam Harris)=> 'S.H"'

function abbrevName(name){
  return name.split(' ').map(e=>e.slice(0,1).toUpperCase()).join('.')
}
//we could split the string into an array
//slice each element in the array to just consist of their first letter, and uppercase that letter
//join the 2 elements together using join('.') which inserts a period between the two
//return that string
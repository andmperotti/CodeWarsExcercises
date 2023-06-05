//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
  let splitName = name.split(' ')
  let first = splitName[0][0].toUpperCase()
  let second = splitName[1][0].toUpperCase()
  return `${first}.${second}`
}
console.log(abbrevName('andrew perotti'))
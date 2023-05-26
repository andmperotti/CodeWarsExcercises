//https://www.codewars.com/kata/57280481e8118511f7000ffa
function splitAndMerge(string, separator) {
  let splitWords = string.split(' ')
  for(let i = 0; i<splitWords.length; i++){
  	splitWords[i]=splitWords[i].split('').join(separator)
  }
  splitWords=splitWords.join(' ')
  return splitWords
}
console.log(splitAndMerge("My name is John","-"))
//this one took a little longer than I had hoped but I didn't need any help or googling, just had to think about the objects I was working with and the operations required on them.
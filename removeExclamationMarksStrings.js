//https://www.codewars.com/kata/57fae964d80daa229d000126/solutions/javascript
function remove (string) {
  let tempArr = string.split('')
  if(tempArr[tempArr.length-1]==='!'){
    tempArr.pop()
  }
  return tempArr.join('')
}
console.log(remove('Hi!'))
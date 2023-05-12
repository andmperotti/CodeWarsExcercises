//https://www.codewars.com/kata/56dd9b84fe5754786f0014f7
Array.prototype.filter = function (func) {
  let newArray = []
  let runLength = this.length
  for(let i = 0; i < runLength; i++){
    if(func(this[i])){
      newArray.push(this[i])
    }
  }
  return newArray
}
console.log([1, 2, 3, 4, 5].filter(num => num > 3)) //== [4, 5]
//Took me 20 minuts to do this... I don't believe this is a 8 kyu but oh well.
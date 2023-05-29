//https://www.codewars.com/kata/57277a31e5e51450a4000010/train/javascript
function firstToLast(str,c){
  if(str.includes(c)){
    return str.lastIndexOf(c)-str.indexOf(c)
  }else{
    return -1
  }
  
}
console.log(firstToLast("ababc","d"))
//At first I thought the creator wanted the characters from the gap, I'm doing this at 7pm after a long day of physical work outside, so I'm still happy I got this done in ten minutes even if it's a 8 kyu.
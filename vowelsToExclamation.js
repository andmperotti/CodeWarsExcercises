//https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
function replace(s){
  return s.split("").map(letter=> "aeiouAEIOU".includes(letter) ? '!':letter).join('')
}

console.log(replace('andrew'))
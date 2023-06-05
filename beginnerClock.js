//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.*/
function past(h, m, s){
  let secondsPast = s +m*60 +h*60*60
  return secondsPast*1000
}
console.log(past(0, 1, 1))
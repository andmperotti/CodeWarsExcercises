//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a
/*Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.*/
function past(h, m, s){
  let secondsPast = s +m*60 +h*60*60
  return secondsPast*1000
}
console.log(past(0, 1, 1))












//retry on 8/2, have not looked at above code

//arguments are 3 integers, seemingly whole, representing hours, minutes, and seconds since midnight
//ouput will be the combined number of milliseconds since midnight by converting the arguments to milliseconds and summing them 
//example: past(0, 1, 1)=> 61000



function past(h, m, s){
  m+= h*60
  s+= m*60
  return s*1000
}

//return result of adding together the:  h argument * the amount of milliseconds in an hour, m argument * the amount of milliseconds in a minute, s argument * the amount of milliseconds in a second

//google gave an exponent when I asked for milliseconds in an hour, so we'll go another way

//we'll convert h argument to minutes and add it to m, and then convert m to seconds and add it to s, and then return s * milliseconds in a second (1000)




//this worked, but a more declarative syntax would have been:
// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }
//I'll add this to my Anki.
//here it returns the result of calculating the seconds for the amount of hours (h) + the amount of seconds for the amount of minutes (m) + (s) seconds TIMES milliseconds in each second.



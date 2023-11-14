//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
function whatday(num) { 
  let days = ['placeholder', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return num>=1&& num <=7 ? days[num] : "Wrong, please enter a number between 1 and 7"
}

console.log(whatday(0))
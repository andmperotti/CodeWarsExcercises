//https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  return Number(String(num).split('').map(e=>e*e).join(''))
}
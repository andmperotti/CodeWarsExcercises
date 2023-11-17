//https://www.codewars.com/kata/5977618080ef220766000022
function usdcny(usd) {
  return String((usd * 6.75).toFixed(2) + ' Chinese Yuan')
}
console.log(usdcny(10))

/* better way:*/

// usdcny = $ => `${($ * 6.75).toFixed(2)} Chinese Yuan`;

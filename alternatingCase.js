//https://www.codewars.com/kata/56efc695740d30f963000557
String.prototype.toAlternatingCase = function () {
  return this.split('').map(e=>e.match(/[A-Z]/)? e.toLowerCase(): e.toUpperCase()).join('')
}
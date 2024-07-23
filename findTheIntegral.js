//https://www.codewars.com/kata/59811fd8a070625d4c000013

//arguments are 2 integers, the first representing a coefficient, and the second representing an exponent
//output will be a string consisting of the integral of the expression passed.

function integrate(coefficient, exponent) {
  return `${coefficient/(exponent+1)}x^${exponent+1}`
}
//we'll return a string via a template string using template literals to plug in arguments and mutate one of their values, coefficient /(exponent+1) , and insert the 'x' and '^' symbols, and add 1 to the argument exponent as well 

console.log(integrate(3,2))

//best practice basically did the same thing, will add this challenge to my anki for future studiying
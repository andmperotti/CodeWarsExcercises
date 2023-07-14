//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6
function cockroachSpeed(s) {
  return Math.floor(s*100000/3600)
}
//s is kilometers per hour
//We need to return centimeters per second, there's 100000 cm per 1 km
//There's 3600 seconds in an hour
console.log(cockroachSpeed(1.08))

//the better way would have been to divide s by 0.036, which can be found by taking the seconds per hour (3600) and dividing it by the cm's in a km (100000).
//https://www.codewars.com/kata/56530b444e831334c0000020
function chromosomeCheck(sperm) {
  return sperm === 'XY' ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter."
}
console.log(chromosomeCheck('XY'))
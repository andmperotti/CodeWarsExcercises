//https://www.codewars.com/kata/5bb0c58f484fcd170700063d
function pillars(numPill, dist, width) {
  return numPill>1 ? (numPill-1)*(dist*100) + width*(numPill-2) : 0;
}
//number of pillars multiplied by the distance between each but that's converted to centimeters. Then take the number of pillars and remove 2 of them and then multiply their width to get the total width of the pillars between the first and secodn. Then take those 2 results and add them together.

console.log(pillars(2, 20, 25));
//https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(x=>!(geese.includes(x)))
  //return an array containing all of the strings in the input array except those that match strings in geese
};
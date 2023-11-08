//https://www.codewars.com/kata/58d248c7012397a81800005c
var cubeChecker = function(volume, side){
  return side>0 ? volume === side*side*side : false;
};

console.log(cubeChecker(-8,-2))
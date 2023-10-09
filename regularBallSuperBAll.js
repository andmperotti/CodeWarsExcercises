//https://www.codewars.com/kata/53f0f358b9cb376eca001079
var Ball = function(ballType="regular") {
  this.ballType = ballType
};

/* could also do:
var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};
*/
//https://www.codewars.com/kata/55ccdf1512938ce3ac000056/train/javascript

//argument is a string, which is a statement from either a person or a monster
//output is true or false depending on if that statement includes specific sub string collections, these sub collections are: '3.50', 'three fifty', 'tree fiddy'
//examples: ('Your girl scout cookies will be $3.50')=>true, ("I require a three dollar and fifty cent tip to let you over this bridge") => false

function isLockNessMonster(s) {
  return s.includes('3.50')||s.includes('three fifty')|s.includes('tree fiddy')
}

//we'll return the result of evaluating for any of 3 conditions using the or || operator, and using the includes method on the s argument to check for those specific sub string collections

//This code sufficed the challenge, it was similar to the second best practice answer, the best practice answer used regex which I'm still being advised not to learn so I'm content with my work here.
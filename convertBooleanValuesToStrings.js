//https://www.codewars.com/kata/53369039d7ab3ac506000467
//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
  if(bool === true){
  	return 'Yes';
  }else if(bool === false){
  	return 'No'
  }
}
//I didn't use the right case for the first letter in each returned value at first
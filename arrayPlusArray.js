//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((accum,c)=>accum + c,0)+arr2.reduce((accum,c)=>accum + c,0); //something went wrong
}

//I didn't think this would work but it did first try :)
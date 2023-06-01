//https://www.codewars.com/kata/57238ceaef9008adc7000603
function colorOf(r,g,b)
{
   return "#" + toHex(r)+ toHex(g)+ toHex(b);  
}

function toHex(n)
{
  var result = n.toString(16);
  return result.length == 1 ? "0" + result : result;  
}
console.log(colorOf(1,2,3))

//I didn't get this myself at all, I either didn't see the task section mention that if a value's length === 1 then add a 0 to it and in front of it. 
//It wasn't until I viewed solutions. Kinda of poorly worded.
//https://www.codewars.com/kata/570597e258b58f6edc00230d
function array(string) {
   let result = string.split(",").slice(1,-1).join(" ")
   return result.length >0 ? result : null;
}
console.log(array('1,2,3'))
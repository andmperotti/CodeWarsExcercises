//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript
function invert(array) {
   return array.map(x=> {
      //if number is positive, turn it into negative
      if(x>0){
         return -Math.abs(x)
      //else if number is negative turn it positive
      }else{
         return Math.abs(x)
      }
   })
}
console.log(invert([-2,3,-2,3]))

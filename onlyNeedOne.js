//https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript
function check(a, x) {
  let result = false;
  for(let i = 0; i < a.length; i++){
    if(a[i]===x){
      result=true
    }
  }
  return result
}
//I wasn't sure what I could use so I chose to use the most basic code I could think of. I see others just chose to use includes(). 
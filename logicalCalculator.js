//https://www.codewars.com/kata/57096af70dad013aa200007b
// function logicalCalc(array, op){
//   if(op==="AND"){
//   	return !array.includes(false)
//   }else if(op==="OR"){
//   	let a = array[0]
//   	for(let i = 1; i<array.length; i++){
//   		a = a || array[i]
//   	}
//   	return a
//   }else if(op==="XOR"){
//   	let a = array[0]
//   	for(let i = 1; i<array.length; i++){
//   		if(a===array[i]){
//   			a=false
//   		}else{
//   			a===true
//   		}
//   	}
//   	return a
//   }
// }
// console.log(logicalCalc([true, true, false], "XOR"))

//my attempt above did not account for passing in one element arrays with an operator

//this is a similar approach by someone else that I'll try to recall at a later date:

function logicalCalc(array, op)
{ 
  var result = array[0];
  for(var i = 1; i < array.length; i++)
  {
    if(op == "AND")
    {
      result = result && array[i];
    }
    if(op == "OR")
    {
      result = result || array[i];
    }
    if(op == "XOR")
    {
      result = result != array[i];
    }
  }
  return result;
}

console.log(logicalCalc([true], "AND"))
console.log(true && undefined)
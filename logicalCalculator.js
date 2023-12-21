//https://www.codewars.com/kata/57096af70dad013aa200007b
function logicalCalc(array, op){
  if(op = "AND"){
  	return array.every(e=>e===true)
  }else if(op==="OR"){
  	return array.every((ele, ind, arr)=>ele===true || arr[ind+1]===true)
  }else if(op==="XOR"){
  	return arr.every((ele, ind,arr)=>(ele===true && arr[ind+1]===false)||(ele===false && arr[ind+1]===true))
  }
}
console.log(logicalCalc([true, true, true, false], "OR"))
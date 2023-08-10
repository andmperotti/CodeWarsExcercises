//https://www.codewars.com/kata/5865918c6b569962950002a1
function strCount(str, letter){  
  let result = 0
  for(let i = 0; i < str.length; i++){
  	if(str[i]===letter){
  		result+=1
  	}
  }
  return result
}

console.log(strCount('bananas', 'a'))
console.log('bananas'.split('a'))
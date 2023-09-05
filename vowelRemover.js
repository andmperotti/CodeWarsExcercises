//https://www.codewars.com/kata/5547929140907378f9000039
function shortcut (string) {
	let splitStr = string.split("")
	for(let i = 0; i<splitStr.length; i++){
		if('aeiou'.includes(splitStr[i])){
			splitStr.splice(i,1)
			i--
		}
	}
  return splitStr.join('')
}


console.log(shortcut('goodbye'))
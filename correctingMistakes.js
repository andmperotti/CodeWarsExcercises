//https://www.codewars.com/kata/577bd026df78c19bca0002c0
function correct(string){
	let stringArr = string.split("")
	for(let i = 0; i < stringArr.length; i++){
		if(stringArr[i]=='5'){
			stringArr[i]='S'
		}else if(stringArr[i]=='0'){
			stringArr[i]='O'
		}else if(stringArr[i]=="1"){
			stringArr[i]='I'
		}
	}
	return stringArr.join("")
}

console.log(correct("DUBL1N"))

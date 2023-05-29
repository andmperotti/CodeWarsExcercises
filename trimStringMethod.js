//https://www.codewars.com/kata/5729b103dd8bac11a900119e
function fiveLine(s){
	let trimmed = s.trim()
	let result = `${trimmed}`
	for(let i = 2; i<6;i++){
		let temp = '\n'
		temp+=`${trimmed.repeat(i)}`
		result+=temp
	}
	return result
}
console.log(fiveLine('andrew'))


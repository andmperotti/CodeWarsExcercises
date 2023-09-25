//https://www.codewars.com/kata/56b29582461215098d00000f
function pipeFix(numbers){
	let resultArr = []
	let min = numbers[0]
	let max = numbers[numbers.length-1]
	for(let i = min; i<=max; i++){
		resultArr.push(i)
	}
		return resultArr
}

console.log(pipeFix([3,4,5,9]))
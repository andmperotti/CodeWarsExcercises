//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
	//split s
	let splitS = s.split('')
	//loop elements, build each
	let builtElements = splitS.map((element, index)=>`${element.toUpperCase()}${element.toLowerCase().repeat(index)}`)
	//join with -
	return builtElements.join("-")
}
console.log(accum("ZpglnRxqenU"))
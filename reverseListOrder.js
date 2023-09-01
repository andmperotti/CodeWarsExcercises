//https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b
function reverseList(list) {
	for(let i = 0; i<list.length/2; i++){
		let tempEle = list[i]
		list[i] = list[list.length-1-i]
		list[list.length-1-i]=tempEle
	}
	return list
}
//https://www.codewars.com/kata/55eea63119278d571d00006a
function nextId(ids){
	ids.sort()
	console.log(ids)
	for(let i = 0; i<ids.length; i++){
		if(ids[i]!=i){
			return i
		}
	}
	//if above loop didn't return a value, then take the last and add 1 to it
	return ids.length
}
console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]))


//did not complete
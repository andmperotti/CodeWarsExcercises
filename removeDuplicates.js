//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
function distinct(a) {
	for(let i = 0; i<=a.length; i++){
		if(a.slice(0,i).includes(a[i])){
			a.splice(i,1)
		}
	}
	return a
}
console.log(distinct([1,1,2,3,4,5]))

//challenge creator said to return the same array, yet I see solutions that build a new array within the function. I also see reported issues with their test code. I'm going to give up on this one but not add it to my Anki, however I do see a lot of solutions using a set and will need to look into those.
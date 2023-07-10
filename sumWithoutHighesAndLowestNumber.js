//https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArray(array) {
	if(array===null||array===undefined||array.length<=1){
		return 0
	}else if(array.length>1){
		array.sort((a,b)=>{
			if(a<b){
				return -1
			}
		})
		array.shift()
		array.pop()
		return array.reduce((acc,cur)=>{
			return acc + cur
		},0)
	}

}
console.log(sumArray())

// //attempt at using ternary:
// function sumArray(array){
// 	return array===null||array===undefined||array.length<=1 ? 0 : array.sort((a,b)=>a-b)
// }
// //I can't get the array to return after running pop and shift, that is how those operators work though, they return what they removed.
// //Oh I could have used slice to achieve what I wanted with pop and shift, I didn't think about that, I will add it to my Anki cards.
// //Under the solutions for this challenge the second highest voted code fragment under best practice I believe is above and away the best, it uses a ternary operator and the slice method with reduce.
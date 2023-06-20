//https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x){
	return x
	.split('')
	.map(x=>{
		if(x<5){
			return x=0
		}else if(x>=5){
			return x=1
		}
	})
	.join('')
}
console.log(fakeBin('29383842384'))
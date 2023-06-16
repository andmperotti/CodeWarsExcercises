//https://www.codewars.com/kata/57f780909f7e8e3183000078
function grow(x){
	return x.reduce((acc,current)=>acc*current, 1)
}
console.log(grow([1,2,3]))
//https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
	if(array.length>0){
		return array.reduce((a,c)=>a+c, 0)/array.length
	}if(array.length<1){
		return +0
	}
}

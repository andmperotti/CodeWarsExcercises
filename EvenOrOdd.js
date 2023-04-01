//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// let num = Math.floor(Math.random()*100)
// if(num % 2 === 0){
// 	console.log(`${num} is even`)
// }else{
// 	console.log(`${num} is odd`)
// }
//^ was the code I wrote before I saw the test cases

//the following was what I wrote when I saw the test cases

function evenOrOdd(number){
	if(number % 2 === 0){
		return "Even"
	}else{
		return "Odd"
	}
}
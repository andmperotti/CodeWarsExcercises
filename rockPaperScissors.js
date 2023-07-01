//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
	//Created a function that rolls choice of weapon, but after I made it I realized it wasn't needed, oh well.
	// function playerSelection()=>{
	// 	let result = Math.random()
	// 	if(result<.3333){
	// 		result = 'rock'
	// 	}elseif(result<.6666){
	// 		result='paper'
	// 	}else{
	// 		result='scissors'
	// 	}
	// 	return result
	// }
	if(p1=='rock'&&p2=='paper'){
		return "Player 2 won!"
	}else if(p1=='rock'&&p2=='scissors'){
		return "Player 1 won!"
	}else if(p1=='paper'&&p2=='rock'){
		return "Player 1 won!"
	}else if(p1=='paper'&&p2=='scissors'){
		return "Player 2 won!"
	}else if(p1=='scissors'&&p2=='paper'){
		return "Player 1 won!"
	}else if(p1=='scissors'&&p2=='rock'){
		return "Player 2 won!"
	}else{
		return 'Draw!'
	}

};

console.log(rps('scissors', 'rock'))
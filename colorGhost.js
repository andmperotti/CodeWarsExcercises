//https://www.codewars.com/kata/53f1015fa9fe02cbda00111a
class Ghost{
	constructor(){
		this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random()*4)]
	}
}
let ghost = new Ghost()
console.log(ghost.color)
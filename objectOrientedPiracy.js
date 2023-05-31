// //https://www.codewars.com/kata/54fe05c4762e2e3047000add
// function Ship(draft,crew) {
//  this.draft = draft;
//  this.crew = crew;
//  this.isWorthIt = function(){
//  	let crewWeight = this.crew*1.5
// 	let weightAfterCrew= this.draft-this.crewWeight
// 	if(weightAfterCrew>20){
// 		return true
// 	}else{
// 		return false
// 	}
//  }
// }
// let drewShip = new Ship(50,1)
// console.log(drewShip.isWorthIt())

// Ship.prototype.isWorthIt=function(){
// 	let crewWeight = Ship.crew*1.5
// 	let weightAfterCrew= Ship.draft-Ship.crewWeight
// 	if(weightAfterCrew>20){
// 		return true
// 	}else{
// 		return false
// 	}
// }
/*Task
You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

Add the method

isWorthIt
to decide if the ship is worthy to loot. For example:

titanic.isWorthIt() // return false
Good luck and may you find GOOOLD!*/


function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.isWorthIt=function(){
	let crewWeight = this.crew*1.5
	let weightAfterCrew = this.draft-crewWeight
	if(weightAfterCrew>20){
		return true
	}else{
		return false
	}
}
let drewShip = new Ship(50,1)
console.log(drewShip.isWorthIt())
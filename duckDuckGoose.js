//https://www.codewars.com/kata/582e0e592029ea10530009ce

function duckDuckGoose(players, goose) {
	if(goose>players.length){
		return players[(goose %(players.length))-1].name
	}else{
		return players[goose-1].name
	}
}

class Player {
  constructor(name) {
  	this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

console.log(duckDuckGoose(players, 18))

//I apparently was wrong although this worked for me....
//There was a much simpler way to write this which means I'll add it to my anki

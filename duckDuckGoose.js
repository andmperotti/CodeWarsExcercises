//https://www.codewars.com/kata/582e0e592029ea10530009ce

function duckDuckGoose(players, goose) {
	if(goose>players.length){
		return (players[(goose%players.length)-1].name)
	}else{
		return (players[goose-1].name)
	}

}
let a = {name: 'a'}
let b = {name: 'b'}
let c = {name: 'c'}
let d = {name: 'd'}
console.log(duckDuckGoose([a, b, c, d], 4))

//I apparently was wrong although this worked for me....
//There was a much simpler way to write this which means I'll add it to my anki

//https://www.codewars.com/kata/57e921d8b36340f1fd000059
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
	if(dolphin){
		return (pontoonDistance/youSpeed)<(sharkDistance/(sharkSpeed/2)) ?  "Alive!" : "Shark Bait!";
	}else {
		return (pontoonDistance/youSpeed)<(sharkDistance/sharkSpeed) ? "Alive!" : "Shark Bait!"
	}
}
console.log(shark(7, 55, 4, 16, true))
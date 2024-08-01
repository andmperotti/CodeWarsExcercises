//https://www.codewars.com/kata/58dced7b702b805b200000be




//arguments will be 2 instances of a class which takes in 2 values and creates a 'Point' instance with 2 properties, these 2 properties signify the location of that instance on a grid using x and y.
//output will be the difference of the values of the first instance and second instance, aka the arguments.
//example: distanceBetweenPoints(new Point(3,3), new Point(3,3)) =>0, distanceBetweenPoints(new Point(1,6), new Point(4,2))=>5

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}
//return the difference between objects x and y values
//also create a class so I can test this in sublime:
class Point{
	constructor(x,y){
		this.x = x,
		this.y = y
	}
}

console.log(distanceBetweenPoints(new Point(-2,1), new Point(2,-2)))


//I did not get this right today, will add it to my Anki deck and try again another day
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}
//I didn't know about the hpot method but I wansn't solving using squares anyways.

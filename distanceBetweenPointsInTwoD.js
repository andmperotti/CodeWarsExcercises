//https://www.codewars.com/kata/58dced7b702b805b200000be




//arguments will be 2 instances of a class which takes in 2 values and creates a 'Point' instance with 2 properties, these 2 properties signify the location of that instance on a grid using x and y.
//output will be the difference of the values of the first instance and second instance, aka the arguments.
//example: distanceBetweenPoints(new Point(3,3), new Point(3,3)) =>0, distanceBetweenPoints(new Point(1,6), new Point(4,2))=>5

// function distanceBetweenPoints(a, b) {
//   return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
// }
//return the difference between objects x and y values
//also create a class so I can test this in sublime:
class Point{
	constructor(x,y){
		this.x = x,
		this.y = y
	}
}

// console.log(distanceBetweenPoints(new Point(-2,1), new Point(2,-2)))


//I did not get this right today, will add it to my Anki deck and try again another day
// function distanceBetweenPoints(a, b) {
//   return Math.hypot(a.x - b.x, a.y - b.y);
// }
//I didn't know about the hpot method but I wansn't solving using squares anyways.











//8/2 attempt

//arguments are 2 new instances of a Point class that has been defined behind the scenes of the challenge, I defined one above. This instances take in 2 values, integers representing where on a grid an point is located at.
//output will be the difference between the 2 points on the grid as 1 integer.
//example: distanceBetweenPoints(new Point(1,1), new Point(1,1)) => 0, distanceBetweenPoints(new Point(1,6), new Point(4,2))=>5
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

//I remember we need to use the Math.hypot method 
//we pass to it the comma separated values that are the differences of object a and object b's x and y values.
//we return that output which is the square root of the 2 differences squared and summed together.


//I have added this challenge to my Anki so I won't forget it in the future.
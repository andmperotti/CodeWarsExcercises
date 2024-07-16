//https://www.codewars.com/kata/565f5825379664a26b00007c

//arguments are I can only presume to be integers for the theoretical box's width, height, and depth, by looking at the test cases
//ouput will be an array made up of the area of the box, and the volume of the box, in integers 
//examples: (4,2,6)=>[88,48], (10,10,10)=>[600,1000]

function getSize(width, height, depth){
	return [2*(width*depth)+2*(depth*height)+2*(height*width), width*height*depth]
}

//return an array literal which it's first element is made up of the calcualtion to find the area of this box, the second is the calculation to find its volume
console.log(getSize(4,2,6))

//I had to google the calculation to find the surface area, which I wish the challenge would have stated instead of just 'area', oh well today I learned.
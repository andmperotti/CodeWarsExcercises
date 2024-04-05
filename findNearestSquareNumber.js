//https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.


function nearestSq(n){
	//check if n is a perfect square, by comparing it's output to a rounded output via Math.floor()
	if(Math.floor(Math.sqrt(n))===Math.sqrt(n)){
		return n
	}else{
    //We'll calculate the square root of the argument and using toString() and split() create an array which separates the integer from its decimal value. Then we'll check the leftmost integer value of the decimal portion and if it's less than 5 then we know the previous perfect square is closer to the square root of our argument, else the next square is closer, using this we'll return that calculated square value.
		return Math.sqrt(n).toString().split('.')[1][0]<5 ? Math.floor(Math.sqrt(n))**2 : Math.ceil(Math.sqrt(n))**2
	}
}

console.log(nearestSq(10))



//I took too much time on this one, and after looking at the best practice answer:
// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);
//It's because I lacked knowledge of Math.round()... As you can see my return value is calculated in the same way however I took many more steps to get there and it's more code for no benefit, I'll add this challenge to my Anki deck for further learning of Math.round
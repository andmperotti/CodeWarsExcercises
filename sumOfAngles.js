//https://www.codewars.com/kata/5a03b3f6a1c9040084001765

// DESCRIPTION:
// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. N will be greater than 2.

function angle(n) {
	//I had to google how to calculate the sum of interior angles of a simple polygon when only given the x number of sides, and found (n-2)*180 would give such a result.

	return (n-2)*180
}
console.log(angle(4))


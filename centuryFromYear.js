//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
//Given a year, return the century it is in.

function century(year) {
	return Math.ceil(year/100);
}
console.log(century(2000))

//I spent too much time trying to make a function that converted the year into a string and then had multiple conditions with nested conditions that would check the length of that string and then depending on that return value then check if the number ended in a 0 or greater than a 0 and tried to then return the first few digits plus 1.
//After 17 minutes I googled the problem and saw the above result, I know understand what it's doing; It divides our year by 100, which returns a centuryish value and then runs Math.ceil() on that value therefore if the value which is a float has anything other than .0 it gets rounded to the next highest integer, which would give us the true century value, otherwise if its a float that ends in .0 Math.ceil() doesn't do anything with it and returns the values before the theoretical .0 .
//I have added this to my anki coding challenges section.
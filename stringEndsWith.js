//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d

function solution(str, ending){
	//compare the index of where the last instance of the ending arg begins in the str argument plus the length of the ending arg, to the str arg's length 
	//lastIndexOf returns -1 if the arg passed to it isn't found in the source string. If we don't create a conditional to check if the value is => 0, then we'll have unexpected outcome; last index of ending = -1, length of ending could be 4, and that could === str length if str is made up of 3 characters
	return str.lastIndexOf(ending)>=0? str.lastIndexOf(ending)+ending.length == str.length : false;
}
console.log(solution('abc', 'abcd'))

//I didn't recall the method endsWith, would have saved a lot of time and logic by just check str.endsWith(ending)
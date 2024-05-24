//https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

// DESCRIPTION:
// Introduction
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)
// Task
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
// Rules
//  1.  The input string will always be lower case but maybe empty.

//  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]




//argument is a string made up of lower case letters and possibly spaces.
//output will be an array made up of copies of the argument where each copy has a capitalized letter unless a space is present. The capital letter will signify a letter doing the wave like people in a row at a stadium do the wave, the first string would have a capitalized first letter, then the second string would change that first letter to lowercase and have its second element capitalized, etc, unless there was a space then there would just remain a space.
//example: 'bob'=>['Bob', 'bOb', 'boB']

function wave(str){
	//iterate over the argument and for each character create a new string with that specific letter capitalized and add that string into an array variable which will be returned at the functions endpoint. If the character is a space, then don't add anythign that iteration.
	let resultingArray = []
	for(let i = 0; i<str.length; i++){
		//we'll use a ternary expression to check whether the current element is a space, if it is we won't do anything and therefore use '', otherwise...
		//we'll push a result of concatenated strings that are made up of three expressions, first the section of the string that exists before the current iterated element of the string, secondly the iterator element which will be changed to upper case, third the rest of the string that exists after the iterator matched letter.
		str.charAt(i)===' '? '' : resultingArray.push(str.substring(0,i)+str.charAt(i).toUpperCase()+str.substring(i+1))
	}
	return resultingArray
}
console.log(wave('two words'))

//My code worked
//best practice used regex so i won't look at it
//second best practice used a for loop that for each element in the argument it made an array of the argument and if the current letter targeted wasn't a space then changed the current letter in the split array to uppercase and joined it into a string and pushed it into a temp variable array that would later be returned, thus if there was a space nothing would happen.
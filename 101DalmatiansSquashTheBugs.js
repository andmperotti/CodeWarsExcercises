//https://www.codewars.com/kata/56f6919a6b88de18ff000b36

// DESCRIPTION:
// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!


//starter code:
// function howManyDalmations(numer :
  
//   var dogs ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
  
//   var respond = number <= 10 ? dogs[0] (number <= 50 ? dogs[1] : (number = 101  dogs[3] : dogs[2]
  
// return respond



//My changes:
//Change the spelling of the function to reflect the correct spelling of Dalmatians
//add a closing parentheses for the parameter section of the function
//remove the colon after the parameters parentheses, insert an opening curly brace which signifies the functions body block starting
//add a closing curly brace after the 'return respond'
//insert an assignment operator after 'var dogs' which creates an array, change the spelling of DALMATIONS to DALMATIANS in the last string.
//replace the ( with a : before 'number<=50', which signifies the 2nd operation to the first ternary operator usage in the respond variable declaration. Remove the parentheses before 'number=101', change the = to a <,and add a ? after that 101. swap the expressions so that the 3rd string is returned when the argument is less than 101.

//my code
function howManyDalmatians(number){
	//an array of strings
	var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
	//setting the variable === one of the strings from the above array depending on the argument value
	var respond = number < 10 ? dogs[0] : number <= 50 ? dogs[1] : number<101 ? dogs[2] : dogs[3]
	//if the argument is less than 10, use the first string.
	//else if the argument is less than or equal to 50 use the 2nd string
	//else if the argument is less than 101 retun the 3rd string, else return the 4th string
	return respond
	//return the string that has been bound depending on the argument value
}
console.log(howManyDalmatians(26))//, "More than a handful!");
console.log(howManyDalmatians(8))//, "Hardly any");
console.log(howManyDalmatians(14))//, "More than a handful!");
console.log(howManyDalmatians(80))//, "Woah that's a lot of dogs!");
console.log(howManyDalmatians(100))//, "Woah that's a lot of dogs!");
console.log(howManyDalmatians(101))//, "101 DALMATIANS!!!");

//This suffices the tests however I wanted to return "Woah that's a lot of dogs" when we had 51 to 100 dogs and when over 101 dogs.
//I didn't know we could rewrite the entire function instead of 'fix' it, the best practice answer used a switch statement instead, and resulted in the behavior I wanted.

// function howManyDalmatians(number){
//   if (number <= 10) {
//     return "Hardly any"
//   } else if (number <= 50) {
//     return "More than a handful!"
//   } else if (number === 101) {
//     return "101 DALMATIANS!!!"
//   } else {
//     return "Woah that's a lot of dogs!" 
//   }
// }
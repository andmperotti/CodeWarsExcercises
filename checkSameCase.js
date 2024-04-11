//https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

// DESCRIPTION:
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1


//There are 3 possible outcomes
//first we'll check whether both arguments are indeed letters, by using a variable which holds all letters in the alphabet, and use the includes method to check both letters after converting them to the case of the letters in the variable (lower), else return -1 because one of the 2 arguments is not a letter
//secondly if we have 2 letters for arguments we need to check if they are both the same case, so we'll use an if else statement that looks at the first arguments unicode value using a.charCodeAt() and compares it to b's charCode using a range; <91 ===uppercase
//likewise we'll check if each argument's charcode is also above 91
//finally we'll use an else to symbolize the when both argumnets are letters but don't share the same case we'll return 0
function sameCase(a, b){
	let letters = 'abcdefghijklmnopqrstuvwxyz'
	if(letters.includes(a.toLowerCase())&&letters.includes(b.toLowerCase())){
		if(a.charCodeAt()<91&&b.charCodeAt()<91){
			return 1
		}else if(a.charCodeAt()>91&&b.charCodeAt()>91){
			return 1
		}else{
			return 0
		}
	}else{
		//if one or both of the arguments is not a letter, return -1
		return -1
	}
}
console.log(sameCase('a', 'G'))


//best practice used an if, else if, else to solve this , which first checked if the arguments were letters by comparing the output of changing them to uppercase with changing them to lowercase; if(a.toLowerCase()==a.toUpperCase()||b.toLowerCase()==b.toUpperCase()){return -1}
//so if a wasn't a letter or b wasn't a letter, return -1
//then used comparison and and operator to check if a and b were both lower case or both uppercase
//else if(a===a.toLowerCase()&&b===b.toLowerCase() || a===a.toUpperCase()&&b===b.toUpperCase()){return 1}
//finally used an else to return 0 which was meant for if both arguments were letters but didn't share the same case
//else{return 0}
//I did think about using this methodology but thought it would be more code than what I did above however I saw immediately that I went a more advanced route in logic and used more code.
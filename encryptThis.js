//https://www.codewars.com/kata/5848565e273af816fb000449

//argument to this function will be a string containing space separated words
//output will be a new string which is the encryption result of the argument string through our function, where th efirst letter is converted to ascii code, and the second letter must be switched with the last letter. And no special characters in the input string.
//examples: "Hello"=>"72olle", "good"=>"103dooo"


var encryptThis = function(text) {
	//split the string into an array so we can mutate each word in the argument
	//using map we'll create a new array of words, depending on the length of the word it's operations will either do this if its length is > 2:
		//change the first element in the split array to its ascii value using e.charCodeAt(0)
		//swap the last with the 2nd, using slice()'s
	//or it'll build a string that consists of the ascii character plus the second element from the string
	//join the array into a string and return it
	return text.split(' ').map(e=>e.length>2 ? e.charCodeAt(0) + e.slice(-1) + e.slice(2,-1) + e.charAt(1) : e.charCodeAt(0)+e.charAt(1))
		.join(' ')
}
console.log(encryptThis('A'))

//My code worked, after adding conditional to change operations if length is less than 2.
//the two best practice answers both used regex which I've been advised not to learn yet.
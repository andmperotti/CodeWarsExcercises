//https://www.codewars.com/kata/52efefcbcdf57161d4000091

// DESCRIPTION:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.



//build an object that will be the return of the function
//loop through string elements
//check if the object contains that value as a property
	//if the object has a property === the value of that character, add one to its value
	//otherwise add a property === the value of the current character of the string, and set its value to 1
//return the object

function count(string) {
	let result = {}
	for(let i = 0; i<string.length; i++){
		if(string[i] in result){
			result[string[i]]+=1
		}else{
			result[string[i]]=1
		}
	}
	return result
}
console.log(count('aba'))

//parameters: string of letters or an empty string, doesn't say if it might contain uppercase letters, or symbols, it simply states 'characters'
//return: an object which holds property value pairs which symbolize each unique character in the string and its value reflecting the occurence amount of that character in the string
//examples: 'aba'=>{'a': 2, 'b': 1}, ''=>{}

//I had a few hiccups on this one but did eventually arrive at the above solution. My answer is close to the third best answer the difference being I used an 'in' operator to check for the property values, they used hasOwnProperty. 'in' is ok for this use because we are not inheriting properties from a prototype.
//Best practice answer:
// function count (string) {  
//   var count = {};
//   string.split('').forEach(function(s) {
//      count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }
//did split the string into an array object, and used forEach on it, passing it a function that took each element and checked if the current element existed in the object as a property using a ternary, if so added one to that properties value else added that value to the object as a property, then returned the object. I'm going to put this challenge in my Anki deck and that as the solution.
//The second best answer also used split, then reduce on that array object to build an object (the functions accumulator) by declaring in each iteration that the object would either add 1 to the property if it existed(counts[char])+1, or set the property if it didn't exist to 1 (0+1)
// function count (string) {
//   return string.split('').reduce(function(counts,char){
//     counts[char] = (counts[char]||0) + 1;
//     return counts;
//   },{});
// }
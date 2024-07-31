//https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

//arguement will be a string typically of a persons name, however the test cases shows a country "Mexico"
//output will be an array consisting of the full string argument value and a truncated version that only contains the first two letters of the original name.
//example: whoIsPaying("Mexico")=>["Mexico", "Me"]

function whoIsPaying(name){
  return name.length <=2 ? [name] : [name, name.slice(0,2)] 
}

console.log(whoIsPaying("I"))

//Things to keep in mind: If the length of the argument is less than or equal to towo, we will return an array containing only the name as is

//I originally wrote the function the return an array literal passing in the name argument and a slice of the first 2 elemenets of that name argument, however we also have to account for if the argument is only 2 characters long we need to only return an array with that argument and not a sliced version of it.
//so we'll use ternary operator to check if the length is less than or equal to two and if so we'll return an array with just the argument string inside, else we'll build an array with the argument and the truncated version.


//This code worked and was very similar to the 2 top 'best practice' answer.
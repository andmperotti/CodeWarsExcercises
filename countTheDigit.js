//https://www.codewars.com/kata/566fc12495810954b1000030

//arguments are: n which is an integer, and d which is also an integer, everything in the description makes me believe that these values will be whole integers and not floating.
//output will be the count of the occurences of the d parameter in the results of squaring each n integer
//examples: (10,1)=>4 (1,16,81,100), (25,1)=>11 (1,16,81,100,121,144,169,196,361,441)


// function nbDig(n, d){
// 	//create a variable which holds the squared values of the integers of a range starting at 1 and up to and including the n parameter, we'll do this buy creating an array and running a map function on it, thus using the Array.from method to do both by passing it {length: n+1} which tells it to create 26 items 0=>25, and then the map function tells it to take each element of the array which is NaN at the start and use its index value squared to populate that element instead of NaN
// 	let squared = Array.from({length: n+1}, (x,i)=>i*i)
// 	//then we'll return the occurence count of d in the array variable by using the filter method which we tell it to return an array built from elements that include the d argument and to find that we'll need to convert each element to a string and then run includes String(d), finally chain the length property to return a integer representing the number of squared elements that had the d within its result
// 	return squared.filter(e=>String(e).includes(d)).length

// }
// console.log(nbDig(25,1))

//this challenge description could have been a little clearer, they want us to return the total occurence of d in all of the squared results...
//I'll try this again another day
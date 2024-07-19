//https://www.codewars.com/kata/554ca54ffa7d91b236000023

//arguments are an array of numbers, and an integer. The array represents pictures in a slideshow and their number values relate to where the picture is, like the same location would be given the same value no matter what's going on in the picture. The integer represents the number of allowed same places to be shown in a slideshow, so if this argument is 2, then there can only be 2 images of the same place shown, for example 2 images of the eiffel tower, 2 images of the leaning tower of piza.
//output, well like I just summarized, there can only be n count of same places in the array, here n being the second argument. So we return an array that duplicate locations are limited to the second argument value.
//example: ([1,1,1,2,2,3,3,3],2)=>[1,1,2,2,3,3]


// function deleteNth(arr,n){
// 	//iterate over the array and build an object that holds each specific value as a property and increment its value each time an element with that value is iterated over
// 	let counts = {}
// 	arr.forEach((e,i,arr)=>{
// 		if(!counts[e]){counts[e]=0}
// 		counts[e]++
// 	})
// 	//return an array using the properties as the value and the value of those properties as the number of instances of that value
// 	return Array.from({length: Object.keys(counts).length}, e=>counts[e])

// }
// console.log(deleteNth([1,1,1,2,2,3,3,3], 2))

//we could use the filter method and run it as many times as there are differnt values however that would take a lot of resources depending on how many different locations there are in the array.

//we could iterate over the array and  build an object that holds and possibly increments (depedning on n value) the counts of each location, then return back an array built of the those values up to and including n, as it's inclusive. However if we are really representing images in a slideshow then this might not be the best way.

//we'll go with the second one


//ran out of time, looking at solutions:

//best practice answer:
// function deleteNth(arr,x) {
//   var cache = {};
//   return arr.filter(function(n) {
//     cache[n] = (cache[n]||0) + 1;
//     return cache[n] <= x;
//   });
// }
//This answer is very similar to mine, however they did something I didn't know was possible.
//They used a filter function to build the array but also included a test that allows for the value to be incremented or disallows it if the value is greater than the limiting argument value.

//I'll add this to my Anki deck as I feel it's important to know how to tell the filter function. I'm having a hard time because I thought as soon as the filter method iterates that it would create or increment the proprety in the object, however this makes it seem as if that's not the case until the filter function returns the true or false from checking the value to the property in the object against the limiter value.


//Ok I understand now, there are 2 things happening inside the filter methods callback function. First it's adding/incrementing properties in the object. Secondly its returning the iteration elements value to an array that will be the final output of the entire function, but it's limiting those elements depending on how many have already been added by using the object property values.

//I'll try this challenge again later this week, but am glad I came across it and dissected it here.










//7/19 attempt, have not looked above this line today:



function deleteNth(arr,n){
	let occurences = {}
	return arr.filter(e=>{
		occurences[e] = (occurences[e]||0)+1
		return occurences[e]<=n
	})
}
console.log(deleteNth([1,1,1,2,2,3,3,3], 2))

//build an object which will hold each unique value as a property and their values will be the occurence count of each value in the array
//retrun the output of using map method which: we'll use to iterate over the argument array of values, add or increment the value as a property to the object 'occurences', and add the value into the array if at that time the amount of iterator value occurences is less than the limiting argument(n)

//had a hiccup by using dot notation when i should have been using bracket notation, using dot notation you'd literally be setting properties of 'e', by using bracket notation we evaluate e for the value and that gets used as the property in occurences which results in integers as properties.
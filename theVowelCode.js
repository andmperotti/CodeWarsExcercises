//https://www.codewars.com/kata/53697be005f803751e0015aa

//argument to each function is a string consisting only letters and spaces, and for the other function a string consisting of letters and numbers and spaces
//output will be a string, for the encode function it'll be a string with numbers, and for the decode it'll be a string without numbers
//examples: 'hello'=>'h2ll4', "h3 th2r2"=>"hi there"


//for both functions we're going to split the string argument first that way we can iterate over it's elements, we can use map to create a new array while iterating
//we're also going to need to create an object that stores the vowels and their values, so we can reference it when:
	//we'll use map to iterate and build a new array so that we can later use join to build a string, each iteration of map will take the iteration value and if it exists in the vowels object we'll use the appropriate value instead, or if not we'll use the iteration value as it wasn't a key in the vowels object and therefore we were not given a value from the vowels object. Likewise in the decode function we'll have an object that has the vowel integer values as keys and their associated vowels letters as their values so we can use the same kind of logic check for a return value or use the iteration value if it didn't return a value from the object.
//then we'll return the array joined back together into a string by using join()
function encode(string) {
	let vowels = {
		'a':1,
		'e':2,
		'i':3,
		'o':4,
		'u':5
	}
	return string
		.split("")
		.map(l=>vowels[l] || l)
		.join('')

}

function decode(string) {
	let numbersToVowels = {
		1:'a',
		2:'e',
		3:'i',
		4:'o',
		5:'u'
	}
	return string
		.split("")
		.map(i=>numbersToVowels[i] || i)
		.join('')

}
console.log(encode("hello"))
console.log(decode("h2ll4"))

//this code worked, however I had used the same vowels object in both functions and it wasn't until later that I realized it would be easier to make a new object for the decode function that stored the integers as keys and gave them their corresponding vowel letters as values.
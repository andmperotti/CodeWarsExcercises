//https://www.codewars.com/kata/56a4addbfd4a55694100001f

//argument is a string of words
//output will be true or false if the string of words contains a hello from multiple languages, even if that hello is part of another word in the string
//example: ("my favorite holliday is hallowen") => true (hallo in halloween suffices)

//other notes: function should be case insensitive so convert string to lowercase and use lowercase multi language variants of hello. Also as state in the output section your hellos can be parts of other longer words.

function validateHello(greetings) {
	let hellos = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
	for(let i = 0; i<hellos.length; i++){
		if(greetings.toLowerCase().includes(hellos[i])){
			return true
		}
	}
	return false
}

//create an array consisting of each of the differnt hello's
//iterate over the hellos array
	//each time checking whether the converted to lower string argument includes that hello, if so return true
//return false if the iteration completes without finding a match

console.log(validateHello('hallo sam!'))

//majority used regex, which Leon has still told us to avoid. I'll add this to my anki, including a regex version.
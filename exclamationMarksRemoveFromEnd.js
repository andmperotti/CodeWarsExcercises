//https://www.codewars.com/kata/57faece99610ced690000165

function remove (string) {  
	let splitStr = string.split('');
	while(splitStr[splitStr.length-1]=='!'){
		splitStr.pop()
	}
	return splitStr.join('')
}
console.log(remove('Hi!!!!!!!!!!!!!!'))

//I see that the best practice methods use the replace method, however I have been avoiding learning regex as my lecturer says that regex use sometimes cheats you as a developer. He says to learn it when you're closer to being job ready. So yes there was a better way to solve this challenge but at this time in my learning the way I have completed this is fine with me.
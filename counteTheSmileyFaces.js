//https://www.codewars.com/kata/583203e6eb35d7980400002a

//argument to the function will be an array of string elements that resemble faces
//output will be the number of faces that match a criteria, using ':' or ';' as eyes, using '-' or '~' as a nose, and using ')' or 'D' as smiling mouth. If the argument array is empty, return 0. Argument will always be an array, and order of the characters in each element will always be eyes nose mouth. The nose is optional
//examples: countSmileys([':)', ';(', ';}', ':-D'])=>2, countSmileys([';D', ':-(', ':-)', ';~)']) => 3, countSmileys([';]', ':[', ';*', ':$', ';-D'])=> 1


//return the total number of smiling faces in the array
function countSmileys(arr) {
	//return the length of an array which is created using filter method which iterates over the argument array and checks elements for equality to possible formats of faces, by checking the length of the element and if that element contains a specific value of eyes and mouth and optionally nose (if length>2)
	return arr.filter(e=>
		e.length==2&&(e[0]===':'||e[0]===';')&&(e[1]===')'||e[1]==='D') ? 
			e : 
			e.length===3&&(e[0]===':'||e[0]===';')&&(e[1]==='-'||e[1]==='~')&&(e[2]===')'||e[2]==='D') ? 
			e : null
		).length
}

console.log(countSmileys([':)', ';(', ';}', ':-D'])) //2
console.log(countSmileys([';D', ':-(', ':-)', ';~)'])) //3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])) //1

//this did not work, i'm going to look at the solution
//best practice answer used regex, which I've been advised to not rely on.
//second best answer used an array of possible smiley faces, which I used in my first version of the function however thought I could use chaining ternarys to instead solve the problem for.


//I just realaized that my answer wouldn't work anyways because a 2 length'd face of D: would result in true, if the code worked how I wanted it to.

//I tweaked my code to enforce index of possible eyes, nose, and mouth where they should be in the element.

//I'll add this challenge to my anki deck for future studying.
//https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// DESCRIPTION:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
	//temp variable which will be the result of splitting our argument using hash (#) as separator
	let result = url.split('/')
	//return the first part of the string, which was before the '#'
	return result[0]
}

console.log(removeUrlAnchor('www.codewars.com'))

//best practice used less lines of code; return url.split('#')[0]
//I did think about this exact answer before I submitted mine.

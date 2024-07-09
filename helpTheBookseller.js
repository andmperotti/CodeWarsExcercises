//https://www.codewars.com/kata/54dc6f5a224c26032800005c

//arguements include an array of strings which are books using the books alpha code followed by a space and their quantity (listOfArt), and an array representing categories of books using the first letter of the alphabetic code (listOfCat.
//output will be a formatted string which contains hyphen separated parentheses surrounded alpahbetic category counts, so for every book that started with a specific letter to its alphabetic code we'd accumulate the quantity of books with each of the second arguments values (listOfCat).
//example: stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"])=> (A : 20) - (B : 114) - (C : 50) - (W : 0)


function stockList(listOfArt, listOfCat){
	//if either argument is empty return an empty string, otherwise...
	if(listOfArt.length<1 || listOfCat.length<1){
		return ''
	}

	//use a variable to hold the result of calling map on the listOfArt argument array, and split each element to be its own array
	const artSplit = listOfArt.map(e=>e.split(' '))

	//create an object that will be populated with property values === listOfCat elements, and increment their values using iteration over listOfArt quantities and their first letters connecting to a property in this object.
	let inventory = {}
	listOfCat.forEach(e=>inventory[e]=Number(0))
	artSplit.forEach((e,i)=>inventory.hasOwnProperty([e[0][0]]) ? inventory[e[0][0]]+=Number(e[1]) : null)

	//split the output of Array.keys()
	return ('(' +Object.keys(inventory).map(key=>[key,inventory[key]]).join(') - (') + ')').replaceAll(",", ' : ')
}
console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"], ["A", "B", "C", "W"]))
console.log(stockList([],[[]]))
//this code satisfied the challenge on codewars
//I ran into a lot of hiccups... and I think theres a way to refactor the 2 forEach's into one but at this moment I can't seem to get it to work. I'm also very sure there's a better way to format the return.

//best practice answer:
// function stockList(listOfArt, listOfCat) {
//   var qs = {};
//   if (!listOfArt.length) return '';

//   listOfArt.forEach(function(art) {
//     var cat = art[0];
//     qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
//   });

//   return listOfCat.map(function(c) {
//     return '(' + c + ' : ' + (qs[c] | 0) + ')';  
//   }).join(' - ');  
// }
//first off they create an object which is empty 'qs'
//second they check whether listOfArt has a length, if not return ''
//third they run a foreach loop on listOfArt and for each element 'art' in that array argument they: create a variable 'cat' which is the first letter of the element which symbolizes the category that book is in. Then add a property to that qs object by stating qs[cat] === qs[cat] or 0 , therefore each time you hit a book with a letter it either sets that letter as a property in the object with 0 or with the value it already has, and then add an integer of the value found at splitting art into a sub array and using the 2nd element of that array (index 1).
//finally they return the output of calling map on listOfcat, creating a string for each element (c) === '(' + c + ' : ' + (qs[c] |0) + ')' and then calling join and passing as the glue ' - ' so here for each element in listOfCat they create a string === '(catAlphaCharacter : objectPropertyValue' or 0 if there was no value to that property in that object qs


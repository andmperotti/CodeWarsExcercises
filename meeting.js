//https://www.codewars.com/kata/59df2f8f08c6cec835000012

//argument will be a string of first and last names, each first and last name separated with a colon, each pair separated with a comma.
//output will be a sorted string, all uppercase letters, sorted by last name, but when the last names are the same then sort by the first name, also each pair of names will be inside parentheses and have a comma space between the last and first name, there won't be any separator between pairs inside this string this time.
//example: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


// function meeting(s) {
// 	//we'll change everything to uppercase with toUpperCase(), and reassign to the s variable
// 	s=s.toUpperCase()
// 	//we'll split the string into an array, and get rid of the ;'s at the same time, and reassign the result to s
// 	s=s.split(";")
// 	//using iteration via map, we'll then need replace to change the ;'s into commas and then since we to make sub arrays of each name so we can check last names more easily we'll use the comma's as the separator in split, and reassign it to the s variable
// 	s=s.map(e=>e.split(":"))
// 	//we're going to use sort() and target the last name, using a ternary condition inside the sort we'l have a check for when the last names are equal and then sort with the first name values.
// 	s.sort((a,b)=>a[1]===b[1] ? a[0]-b[0] : a[1]-b[1])
// 		console.log(s)
// 	//we'll add a beginning and closing parentheses to each sub array using unshift and push
// 	s=s.forEach(e=>e[0].unshift('('))
// 	s=s.forEach(e=>e[0].push(')'))

// 	//we'll use join() to create sub strings from each sub array and use commas as the glue
// 	s.forEach(e=>e.join(','))
// 	//we'll join and return the array back into a string 
// }
// meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")


//I had to give up today on this, will try again next week.













//attempt #2, didn't look at anything above this line


//argument is a string of names that are separated by ;'s and the first and last name of each person are separated by :'s, and looks like the first letter of each first and last will be capitalized
//output will be a string made up the same people, whose names are now all uppercase, sorted by last name, and if same last name then sorted by first name, and instead of separating people using ;'s we'll encapsulate them in parenthses and separate their last and first name with a comma space.
//examples: "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn" => "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)") , "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"



//to sort the names, we'll have to change the argument into an array of names [Last]
//if we turn the string into an array and after we're done using array methods, we can use replace to change the []'s to ()'s

//we'll use map to change each element to capital letters
//we'll return the joined array elements as a string using parenthese as the glue.



// function meeting(s) {
// 	let splitS = s.replace(':', " ").split(';')
// 	console.log(splitS)

// }
// meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")





















//7/1/24 attempt, did not look at code above this line.


//argument is a string of full names, "First:Last;First:Last;etc" , so a string of names each first and last's first character is capitalized, each first and last is separated by a :, each entry is separated by the next using a ;
//output will be a string where each persons name is encloses using parentheses, each name first and last is all capitalized, and a comma space is used to separate each persons (LAST, FIRST), also the first and last name of a person swap order, and finally we'll sort the order of people by last name, and if the last name is the same between 2 people, we'll use their first names.
//example: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


// function meeting(s) {
// 	// split the s argument into an array using ;'s as the separator between each element, reassign that value to s (commas separated string values)
// 	s=s.split(';')
// 	//using map we'll reassign s to be the output of invoking the map method on the argument array, its callback will change each persons name into a sub array and use the :'s as the separator, we can also capitalize each letter in the persons sub arrays (array of arrays([[Rubio, Bob]]))
// 	s=s.map(e=>e.toUpperCase().split(':'))
// 	//then we'll sort the order of the elements in the s array variable by using a sort algortihm targeting their last names [1] unless their last names  are the same then their first names [0] ()
// 	s=s.sort((a,b)=>a[1]-b[1])
// 	//then we'll use map with reverse to swap each persons name order, and then turn them back into strings using a comma as the glue to the join method
// 	s=s.map(e=>e.reverse())
// 	//then we'll join the array of s back into a string
// 	s=s.join('(')
// 	// s=s.map(e=>e.replace('[',')').replace(']',')'))
// 	console.log(s)

// }
// meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")

//i failed it again, lets look at the best practice answer and dissect it:
// function meeting(s) {
//   let string = s.toUpperCase().split(';')
//                 .map(x => x.split(':').reverse().join(', '))
//                 .sort()
//                 .join(')(')
//   return '(' + string + ')'
// }
//the function creates a variable and chains methods off it immediately;
//first it changes all letters to upper case then it splits it into an array of people strings, using ; as the separator. Then they use map to iterate over each element in the array which splits those elements into sub arrays using ':' as the separator, then reverses their order and joing them using ', ' as the glue, thus createing a string like 'Bob, Rubio'. Then it sorts them using the default alphabetic sorting function. Then joins the elements of the array together by using ')(' as the glue. Finally returns string while concatenating an opening parenthese to the front of it and a closing to the back of it. 

//I will try this again sometime this week.

















//7/8 attempt, again have not looked at code above here



//argument is a string of full names where each first and last pair is separated by a : and people are separated by a ; , the format of the string looks to be that each first and last is first letter capitalized and everything else lower case.
//output will be a string that is made up by an alphabetically sorted list using last names, and if last names are the same then using first names. Also the separator between the first and last name changes from : to a comma, and the order of the first and last are swapped. Separating each persons name is no longer a comma but parentheses around each persons last, first name, and all letters will be capitalized.
//example: ("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill") => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// function meeting(s) {
// 	//we'll use .toUpperCase on the argument to change all letters to upper case
// 	s=s.toUpperCase()
// 	//create an array of the people by using split() and the ; as the splitter
// 	s=s.split(';')
// 	//iterate over each element using map of that array and create sub arrays using the : as the splitter
// 	s= s.map(e=>e.split(':'))
// 	//iterate over each sub array and reverse its elements, thus swapping the first and last name in order by using the reverse method on the sub array
// 	s=s.map(e=>e.reverse())
// 	//sort the entire array by last name by targeting the [0] index element of each sub array which is now that persons last name
// 	s.sort((a,b)=>a[0]-b[0])
// 	// //sort the array again but this time by only checking whether last names are the same and if so telling the sorting function to use their first names instead, otherwise null
// 	s.sort((a,b)=>a[0]===b[0] ? a[1]-b[1] : null)
// 	// //iterate over the sub arrays and join them into strings using a comma as the glue
// 	s=s.map(e=>e.join(','))
// 	// //iterate over the array and create a string using ')(' as the glue
// 	s.join(')(')
// 	// //return '(' + created string + ')'
// 	// return '(' + s + ')'
// 	return s
// }
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))




//failed again, will try again...

// function meeting(s) {
//   let string = s.toUpperCase().split(';')
//                 .map(x => x.split(':').reverse().join(', '))
//                 .sort()
//   //               .join(')(')
//   // return '(' + string + ')'
//   return string
// }
// console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))


// //what I don't understand is they have no code to sort by first name if the last name is the same.

// //I like this code a little better:
// function meeting(s) {
//     return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
// }












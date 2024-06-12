//https://www.codewars.com/kata/59df2f8f08c6cec835000012

//argument will be a string of first and last names, each first and last name separated with a colon, each pair separated with a comma.
//output will be a sorted string, all uppercase letters, sorted by last name, but when the last names are the same then sort by the first name, also each pair of names will be inside parentheses and have a comma space between the last and first name, there won't be any delimiter between pairs inside this string this time.
//example: "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"


function meeting(s) {
	//we'll change everything to uppercase with toUpperCase(), and reassign to the s variable
	s=s.toUpperCase()
	//we'll split the string into an array, and get rid of the ;'s at the same time, and reassign the result to s
	s=s.split(";")
	//using iteration via map, we'll then need replace to change the ;'s into commas and then since we to make sub arrays of each name so we can check last names more easily we'll use the comma's as the delimiter in split, and reassign it to the s variable
	s=s.map(e=>e.split(":"))
	//we're going to use sort() and target the last name, using a ternary condition inside the sort we'l have a check for when the last names are equal and then sort with the first name values.
	s.sort((a,b)=>a[1]===b[1] ? a[0]-b[0] : a[1]-b[1])
		console.log(s)
	//we'll add a beginning and closing parentheses to each sub array using unshift and push
	s=s.forEach(e=>e[0].unshift('('))
	s=s.forEach(e=>e[0].push(')'))

	//we'll use join() to create sub strings from each sub array and use commas as the glue
	s.forEach(e=>e.join(','))
	//we'll join and return the array back into a string 
}
meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill")


//I had to give up today on this, will try again next week.
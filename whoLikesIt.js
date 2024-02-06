//https://www.codewars.com/kata/5266876b8f4bf2da9b000362

// DESCRIPTION:
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
  switch(true){
  case names.length>3:
  	return `${names[0]}, ${names[1]} and ${names.length-2} others like this`;
  	break;
  case names.length>2:
  	return `${names[0]}, ${names[1]} and ${names[2]} like this`
  	break;
  case names.length>1:
  	return `${names[0]} and ${names[1]} like this`;
  	return 
  	break;
  case names.length==1:
  	return `${names[0]} likes this`;
  	break;
  default: 
  	return `no one likes this`;
  	break;
  }
}

//I eventually got this right but the syntax of their wanted output I kept getting wrong.
//I see that instead of true as the switch argument I could have used names.length and then instead passed to the case's the different lengths of the array.
//will add to my Anki deck 
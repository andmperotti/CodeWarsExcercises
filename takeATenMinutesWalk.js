//https://www.codewars.com/kata/54da539698b8a2ad76000228

// DESCRIPTION:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).""



function isValidWalk(walk) {
	//we'll use x and y variables to track our starting longitude and latitude position, and change these later per element in the array
	let x = 0
	let y = 0
	//we'll also use a variable that reduces from ten to 0 which represents the minutes used to walk the given route
	let minutesLeft = 10
	//a for loop will help us to track our coordinates and minute walked with each direction element we're given
	walk.forEach(e=>{
		//an if, elif,elif,elif will help us to calculate whether an element increments or decrements our x or y variable
		if(e==='n'){
			y+=1
		}else if(e==='s'){
			y-=1
		}else if(e==='w'){
			x-=1
		}else if(e==='e'){
			x+=1
		}
		//decrement our minutesLeft variable each iteration
		minutesLeft-=1
	})
	//if x and y are === starting values and minutesLeft===0 then we'll return true
	if(x===0&&y===0&&minutesLeft===0){
		return true
	}else{
		return false
	}

	//otherwise we'll return false
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk([['n','n','n','s','n','s','n','s','n','s']]))
console.log(isValidWalk(['n','s','e','w','n','s','e','w','n','s']))






//parameters: an array of one letter strings, each letter corresponds to a direction to walk a distance of a city block, each takes 1 minute to walk
//return: true or false, if the walk it gave you takes ten minutes, and if you return to your starting point
//examples: ['n','s','n','s','n','s','n','s','n','s']=>true
//pseudoCode

//My answer worked after I found some syntax errors I made. My answer was very similar to the best practice answer. I could have just returned the output of checking my 3 variables tied together with &&'s, and I could have used a switch statement vs an if and 3 else if's
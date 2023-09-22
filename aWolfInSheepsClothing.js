//https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
function warnTheSheep(queue) {
  if(queue[queue.length -1] == "wolf"){
    return "Pls go away and stop eating my sheep"
  }else{
    for(let i = 0; i < queue.length; i++){
      if(queue[i]=="wolf"){
        return `Oi! Sheep number ${queue.length-i-1}! You are about to be eaten by a wolf!`
      }
    }
  }
}
console.log(warnTheSheep(['sheep', 'wolf', 'sheep', 'sheep']))

//There's a better way to do this:
/*
function warnTheSheep(queue) {
  const position = queue.reverse().indexOf('wolf');
  return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!`;
}
*/ 

//I'll add this to my anki to go over it further
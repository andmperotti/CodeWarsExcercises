//In lieu of a billion dollar jackpot I wanted to create a function which picks lottery numbers, so today I made a recursive function which picks a number and checks if it's in a temp array, if it isn't it's added, if it is then the function gets called again. Now obviously the odds of picking the same number 3 times in a row out of 70 is slim but still possible, which is why I chose to use recursion.
//I'd like to create a ticket function which takes an integer which resembles number of lines you'd like, and it call this function below while checking if the ticket already has the returned line and if it does calls the function again else adds the line to the ticket. Maybe next time the lottery is this big




//recursive function called each time to get a number , which checks the line(array) in which it's trying to populate to see if the random value is already in there
//so base case is if it's not in there it adds it
  //otherwise it calls the function again


function createMegaMillionsLine(){
  //make an array, which will hold the numbers
  let result = []

  //define recursive function which get's called to pull a random number and check if array already contains that number if not then adds, otherwise calls again to pull a new random number, checks the array, repeat until its not
  function numberPicker(arr){
    let num = Math.ceil(Math.random()*70)
    // console.log(num)//testing purposes
    //check if random number exists inside array, if not then add it to array:
    if(!arr.includes(num)){
      arr.push(num)
    }else{ //otherwise call the function again (i forgot to pass the parameter, and return)
      return numberPicker(arr)
    }

    return arr
  }

  //populate your array with numbers using the above function
  for(let i = 0; i<5; i++){
    numberPicker(result)
  }
  //sort the array in ascending order
  result.sort((a,b)=>a-b)
  //add in a random mega number, we don't have to check for it prexisting because it's allowed to be the same as a regular number
  result.push(Math.ceil(Math.random()*25))
  //return the array
  return result
}
console.log(createMegaMillionsLine())



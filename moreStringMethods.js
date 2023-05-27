//https://www.codewars.com/kata/57274562c8dcebe77e001012
function cutIt(arr){
  let smallestEle;
  for(let i = 0; i<arr.length; i++){
  	if(arr[i].length<smallestEle){
  		smallestEle=arr[i].length
  	}else if(smallestEle ===undefined){
  		smallestEle=arr[i].length
  	}
  }

  let resultArr = [];
  for(let i = 0; i<arr.length; i++){
  	resultArr.push(arr[i].substr(0, smallestEle))
  }
  return resultArr
}
console.log(cutIt(["codewars","javascript","java"]))
//I see now that this could have been 2 lines of code inside the function, I was stuck on trying to retrun the result of calling the reduce method on our parameter array and using the smallest value that I didn't think of using map() to do both tasks of finding the smallest length value and usign map to return an array that was cut short enough. I'll add an Anki card for this.
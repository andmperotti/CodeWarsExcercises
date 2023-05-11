//https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
//Create a function that returns the CSV representation of a two-dimensional numeric array.

function toCsvText(array) {
   let result = '';
   for(let subArr in array){
   		result+=array[subArr]
   		if(subArr!=array.length-1){
   			result+='\n'
   		}
   }
   return result
}
console.log(toCsvText([
                                  [ 0, 1, 2, 3, 45 ],
                                  [ 10,11,12,13,14 ],
                                  [ 20,21,22,23,24 ],
                                  [ 30,31,32,33,34 ]
                                 ]))
//This took longer than it should have, I guess I misread what the creator wanted but anyways I got it done without cheating in any way.
//https://www.codewars.com/kata/54edbc7200b811e956000556

//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
  let result = 0;
  for(let sheep of arrayOfSheep){
  	if(sheep === true){
  		result +=1
  	}
  }
  return result
}
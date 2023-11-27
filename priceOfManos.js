//https://www.codewars.com/kata/57a77726bb9944d000000b06
function mango(quantity, price){
	return quantity-3 >0 ? 2*price+mango(quantity-3, price) : quantity*price; 
}

console.log(mango(19,2))
//https://www.codewars.com/kata/57a77726bb9944d000000b06
// DESCRIPTION:
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// Examples
// mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
// mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
// mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
// mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free


//we need to calculate the total cost to our customers while including every 3rd mango for free.
//Here we'll take the quantity argument and subtract from it a value we get from rounding down quantity / 3. quantity/3 symbolizes how many full sets of discounts are in their quatity number, so each time they have accumulated 3 then we grant them a free mango (by subtracting those free mangoes from their total quantity), then finally multiply the price of each and return that to them.
//(quantity-Math.floor(quantity/3))
function mango(quantity, price){
	return (quantity-Math.floor(quantity/3))*price
}
console.log(mango(9, 5))

//best practice answer usd the same operations, just written in a different order:
// function mango(quantity, price){
//   return price * (quantity - Math.floor(quantity / 3));
// }
//https://www.codewars.com/kata/539de388a540db7fec000642

// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
	//check to see if enteredCode === correctCode
	//then check to see if the currentDate of the coupon is <= expirationDate using the Date.parse() method on both arguments
	return enteredCode === correctCode && Date.parse(currentDate)<=Date.parse(expirationDate)
}

console.log(checkCoupon('123','123','Octobe 5, 2014','October 1, 2014'))


//My answer was very similar to the best practice voted answer, only difference was the order of the date arguments in the comparison check, but they both work the same way.
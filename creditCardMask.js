//https://www.codewars.com/kata/5412509bd436bd33920011bc

// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

// return masked string
function maskify(cc) {
	return cc.split('').fill('#', 0, -4).join('')
}
console.log(maskify('4556364607935616'))

//I used this methodology instead of using the replace method as I have been directed to not learn regex yet.
//I do see that most of the best practice answeres used replace and regex, they used replace on a slice of the string up to the 4th from the last element in the string and then added on that last segment to their # string.
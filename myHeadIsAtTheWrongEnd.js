//https://www.codewars.com/kata/56f699cd9400f5b7d8000b55

// DESCRIPTION:
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

// Simples!

function fixTheMeerkat(arr) {
	return arr.reverse()
}

console.log(fixTheMeerkat(["tail", "body", "head"]));//["head", "body", "tail"]



//Simple enough, 3 body parts, the outer parts need to be switched as the middle element/part stays the same, reverse method is perfect here

//The first iteration of the code I wrote:
// function fixTheMeerkat(arr) {
// 	return arr[0].toLowerCase()=='tail' ? arr.reverse() : arr
// }
//But then I failed the other tests and I see that we should expect different arguments, for example sky instead of head. I also concluded from the tests that the argument passed will always need to be swapped around, so the condtional is not needed.
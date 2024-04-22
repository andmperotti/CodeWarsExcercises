//https://www.codewars.com/kata/55c45be3b2079eccff00010f

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


//check if the string has characters, if not return it
//else it's a string with characters and:
//first off we'll have to convert the string into an array, split() with space as separator
//then sort it by
//then combine the array back into a string, join() with space as the delimiter
//return the string

function order(words){
  const numerate = (s) => s.split('').find(x => Number.isInteger(+x))
  return words.split(' ').sort((a, b) => numerate(a) - numerate(b)).join(' ')
}


//parameters: string consisting of words that each contain a number, or possibly an empty string
//return: sorted version of the string where the wrods ascend according to the value in them
//examples: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est", "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople", ""  -->  ""
//pseudoCode


//I did not complete this challenge, and will try again another day, I did look at the solutions which were mostly using regex which I don't want to learn just yet. There were 2 solutions that did not use regex, one used a function expresison which pulls the integer value our of each element of the split array, and then uses that function expression in a sort()'s callback to compare each words integer and sort the elements in the split array. The other uses two for loops, one which is used to keep track of the value we're looking for by starting at 0 and running until iterator is === length of the split array. The second loop iterates over the split array as well, when doing so it uses an if statement to check if the current iterator contains the current first loops iterator value, if so it pushes it, and by doing so we end with a sorted array of elements.
//I liked the first function I described because it was easier to read, and usually easier to read means it's slower than nested for loop, atleast in the case of recursion, however both functions took the same amount of time to run.

//I'll set a calendar date to attempt this challenge in a week without looking at either solution,
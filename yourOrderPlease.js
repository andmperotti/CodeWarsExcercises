//https://www.codewars.com/kata/55c45be3b2079eccff00010f

// // DESCRIPTION:
// // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// // Examples
// // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// // ""  -->  ""


// //check if the string has characters, if not return it
// //else it's a string with characters and:
// //first off we'll have to convert the string into an array, split() with space as separator
// //then sort it by
// //then combine the array back into a string, join() with space as the delimiter
// //return the string

// function order(words){
//   const numerate = (s) => s.split('').find(x => Number.isInteger(+x))
//   return words.split(' ').sort((a, b) => numerate(a) - numerate(b)).join(' ')
// }


// //parameters: string consisting of words that each contain a number, or possibly an empty string
// //return: sorted version of the string where the wrods ascend according to the value in them
// //examples: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est", "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople", ""  -->  ""
// //pseudoCode


// //I did not complete this challenge, and will try again another day, I did look at the solutions which were mostly using regex which I don't want to learn just yet. There were 2 solutions that did not use regex, one used a function expresison which pulls the integer value our of each element of the split array, and then uses that function expression in a sort()'s callback to compare each words integer and sort the elements in the split array. The other uses two for loops, one which is used to keep track of the value we're looking for by starting at 0 and running until iterator is === length of the split array. The second loop iterates over the split array as well, when doing so it uses an if statement to check if the current iterator contains the current first loops iterator value, if so it pushes it, and by doing so we end with a sorted array of elements.
// //I liked the first function I described because it was easier to read, and usually easier to read means it's slower than nested for loop, atleast in the case of recursion, however both functions took the same amount of time to run.

// //I'll set a calendar date to attempt this challenge in a week without looking at either solution,




// //5/10/24 attempt
// //I did not look at anything above this

// // DESCRIPTION:
// // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// // Examples
// // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// // ""  -->  ""


// //arguments are a string of words that contain an integer
// //output will be the string with the words in ascending order of those integers inside the words
// //an example from the description: "is2 Thi1s T4est 3a" => "Thi1s is2 3a T4est"




// function order(words){
//   //split the string into an array
//   let splitWords = words.split(' ')
//   //use nested for loops so that we can iterate over the array elements for as many elements as it has; 5 words would mean 25 iterations. Each iteration will check the integer value in the word against the first loops iterator variable, if the integer === iteration variable value then we'll add that word into a temporary array variable. We'll have to split each word as we bring it into the if statement and run filter on it to return 
//   let result = []
//   for(let i = 1; i<=splitWords.length; i++){
//     for(let j = 1; j<splitWords.length; j++){
//       if(splitWords[i].split('').filter(e=>Number.isInteger(e))===i){
//         result.push(splitWords[i].filter(e=>Number.isInteger(e)))
//       }
//     }
//   }
//   //join() the temp array into a string and return it
//   return result.join(' ')
// }
// console.log(order("is2 Thi1s T4est 3a"))
// //this code didn't work, and I ran out of time, will try again next week sometime. I thought I recalled this function using nested for loops, but no it builds a function expression and then uses it inside sort().






//5/31/2024 attempt

// DESCRIPTION:
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


//argument is a string of words, each word in addition to letters contains one integer
//output will be a string with the words sorted by the numbers that they contain
//examples: 'Gian3ts Francisco2 San1'=>'San1 Francisco2 Gian3ts'

function order(words){
  //split the argument string into an array
  //sort that array variable by using a function that we'll define which takes in a string and returns the integer from it by spliting it into and array using the filter method and parseInt
  function getInteger(str){
    return str.split('').filter(e=>parseInt(e,10))
  }
  //return the sorted string
  return words.split(' ').sort((a,b)=>getInteger(a)-getInteger(b)).join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))
//this code worked, I remember a challenge a couple weeks ago that used a function to pull out a value then use its return in a sorting method. 
//most of the best practice answers used regex which I've been told to not learn yet as it might rob me of learning moer important methods/etc.
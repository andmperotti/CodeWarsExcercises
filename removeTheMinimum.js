//https://www.codewars.com/kata/563cf89eb4747c5fb100001b

// DESCRIPTION:
// The museum of incredibly dull things
// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]


// function removeSmallest(numbers) {
//   return numbers.slice().sort((a,b)=>a+b).slice(1);
// }

// console.log(removeSmallest([1,2,3,4,5]))

//So since we can't mutate the argument array, we'll most likely use .filter or maybe even .map , however I guess we could also use slice(1)
//I also see the inputs are not in ascending order so we'll need to use sort() before we can make that array object
//Since we cannot mutate the original object at all, above we've crated a copy of the array argument using slice(), then we sorted that copy using an ascending callback function to the sort(), finally we created another copy this time removing the first element in that sorted array.




//Oh I see now that they don't want the returned array object to be sorted.
//Ok let's try to use Math.min(...numbers) with index of, then combine the array  via concatenation.
function removeSmallest(numbers) {
  let tempArr = numbers.slice()
  let lowestRating = Math.min(...tempArr)
  let lowestIndex = tempArr.indexOf(lowestRating)
  return tempArr.slice(0, lowestIndex).concat(tempArr.slice(lowestIndex+1))
}

console.log(removeSmallest([1,2,3,4,5]))
//We'll still use numbers.slice to create a copy
//Find the lowest value of the copied array and save it to a variable for usage in another expression
//Create a temp variable to hold the index of that lowest value
//Return an array which is the result of combining the sub array up to the removed value with a sub array made after the removed value (we use +1 to start that sub array after the index of the value we want to remove); resulting in removing the value

//Looking at the best practice answer I see we have mostly the same code, mine is 2 lines more but more compacted. 
// function removeSmallest(numbers) {
//   let indexOfMin = numbers.indexOf(Math.min(...numbers));
//   return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
// }
//They've used a variable to hold the index of the lowest value in the array, and returned an array object that uses the spread operator to pass in the 2 sub arrays made by using the lowest values index as the indentifier where to start and end those sub arrays.
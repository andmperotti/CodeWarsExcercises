//https://www.codewars.com/kata/523f5d21c841566fde000009

// DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
	return a.filter((ele)=>!b.includes(ele))
}

console.log(arrayDiff([1,2,3,4,5], [2,4]))

//I was fearing that they wanted the specific  array object back, but this passed the tests so I won't get too hung up on that. If they did want the same array object back then we could have iterated over array a and poped any elements that were also in array b (b.includes(a[i])) then returned the a array after.
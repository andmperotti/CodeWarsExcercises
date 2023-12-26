//https://www.codewars.com/kata/572b77262bedd351e9000076
function first(arr, n=1) {
	return n === 0 ? [] : arr.filter((value, index, array)=>index<=n-1)
}

console.log(first(['andrew', 'donk', 'somethiiing'], 1))

//arr.slice(0,n) would have been a much simpler answer, I'll add this to my Anki deck for further understanding/consolidation in memory
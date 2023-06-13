//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f
function whatNumberIsIt(n){
  switch (true) {
    case (n==Number.MAX_VALUE): return "Input number is Number.MAX_VALUE";
    case (n==Number.POSITIVE_INFINITY): return "Input number is Number.POSITIVE_INFINITY";
    case (n==Number.MIN_VALUE): return "Input number is Number.MIN_VALUE";
    case (n==Number.NEGATIVE_INFINITY): return "Input number is Number.NEGATIVE_INFINITY";
    case (isNaN(n)): return "Input number is Number.NaN";
    default: return "Input number is " + n;
  }
}


console.log(whatNumberIsIt(1.7976931348623157e+308-10000*2599999999999))
//I did not figure this out on my own, I did have a switch statement, but I failed to realize that I didn't need to make input into a number object but that they already were a number object, and that is what I got caught up on so I'll add this to my anki and will remember it from now on.
//https://www.codewars.com/kata/5721a78c283129e416000999

//argument is an array of numbers
//output will be 2 different array where the argument array values are sorted into them as even and odd values
//examples: pickIt([1,2,3,4])=> [1,3],[2,4]


function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i<=arr.length-1; i++){
  	arr[i]%2===0 ? even.push(arr[i]) : odd.push(arr[i])
  }
  return [odd,even];
}

//The code we were given to start with is missing a for loop, which we'll use to separate the values of the arr array argument values into the already declared 'odd' and 'even' arrays.
//The return was also written for us.

//we'll build a for loop which uses an initialization variable that starts with the value of 0 which reflects the index of the first element in the array argument. We'll then use a stopping condition to tell our loop to iterate until the initialization variable is not equal (past/higher value) than the length of the argument array -1 (zero indexing requires us to alter this). We'll increment the looping variable by one each iteration.
	//inside the for loop we'll use a ternary expression to check whether a value is even else odd and if even push it into the 'even' array else the 'odd' array.

pickIt([1,2,3,4])

//I initially had a problem because I wasn't following the length property of the argument aray with -1, and that was resulting in iterating one additional time than needed and was returning 'undefined' and inserting it into one of the two arrays.

//best practice answer was differnt and used less code so I'll dissect it below and add it to my Anki for future remebering.

// function pickIt (arr) {
  
//   let odd = []
//   let even =[]
      
//   for (var x of arr) {
//       ((x % 2) ? odd : even).push(x)    
//   }
      
//   return [odd, even]
// }

//This function uses a for of loop which iterates over the values of the argument array and each iteration the targeted value is represented by the variable 'x', this also means they don't have to worry about zero indexing like I did, and just need to reference 'x' and the loop does what is needed.
//They use that 'x' variable to check if the current element value of the argument array is even by using modulos and a ternary but use the result as truthy/falsy and therefore select odd if the result was a 0, else even, and then use the push method on the appropriate object to push in the iteration value.


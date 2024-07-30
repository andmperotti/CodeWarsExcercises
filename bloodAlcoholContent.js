//https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8

//arguments will be first an object that is made up of ounces dranken and alcohol by volume of those drinks, then an integer which represents the persons weight, then a string which represents the persons gender, then finally an integer which reflects how much time has passed since they started drinking.
//output will be a number which can use up to 4 decimal points which is the blood-alcohol level of that person at a specific time
//example: bloodAlcoholContent({ounces:12.5, abv:0.4}, 190, 'male', 1)=> 0.0837


function bloodAlcoholContent(drinks, weight, sex, time){
  return +(drinks.ounces*drinks.abv*5.14/weight*(sex==='male' ? .73:.66) - .015*time).toFixed(4)
}

//we were also given the equation of finding the bac:
// BAC% = (A × 5.14 / W × r) - .015 × H 

// A: Total alcohol consumed, in ounces (oz)
// W: Body weight, in pounds (lbs)
// r: The alcohol distribution ratio, 0.73 for man, and 0.66 for women
// H: Time passed since drinking, in hours

//since we have a variable (sex) which changes a multiplier in the equation, we'll need to use a ternary operator and return the correct multiplier given a specific input to 'sex' variable.
//we'll use .toFixed(4) to limit the decimal points shown in the final result, however this method returns a string, so we'll need to wrap the expression with parentheses and preface those with a + operator, and chain onto those parentheses the .toFixed(4) call. The + changes the value into a Number like Number() would have accomplished.
//total alcohol consumed was actually the result of number of drinks * their alcohol by volume, otherwise we just plugged in what we needed to suffice the equation.


console.log(bloodAlcoholContent({ounces: 12.5, abv:0.4}, 190, 'male', 1))
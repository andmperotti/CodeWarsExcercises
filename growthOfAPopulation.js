//https://www.codewars.com/kata/563b662a59afc2b5120000c6
// DESCRIPTION:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// At the end of the first year there will be: 
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be: 
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.
// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10
// Note:
// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.

// There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.




//notes restructured for myself:
//p0 is population at year 0
//percent is the growth per year, so from p0 to p1 the description example grows 2%
//aug is the number of people moving into the city per year
//p is the population we're attempting to find after return years

//for loop that our iterator starts with p0, iterates until iterator is not less than p, because we want it to return == or >; >=, incrementer is i + i times percentage then adds or subtracts aug (people moving in or out). 
//We use a years variable to count the iterations and return it when the loop is finished giving us a 'years taken to reach p' value.
function nbYear(p0, percent, aug, p) {
let years = 0; 
  for(let i = p0; i<p; i=Math.floor(i+i*(percent/100))+aug){
    years++
  }
    return years
}

console.log(nbYear(10, 0, 1, 15))

//When i first wrote the function I forgot to add in the Math.floor() to surround the outcome of the percentage * p0.
//best practice actually shows something way different, they used a years iterator which I wanted to use however that would require me to use var instead of let so years would be function scoped not loop scoped, they iterated until p0 was not less than p. And they incremented years per iteration. In the loop body they changed p0 to equal the calculation.
//I didn't want to use var because its "outdated"
//I went ahead and changed what Math.floor() surrounds in my function.
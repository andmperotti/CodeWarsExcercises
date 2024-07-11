//https://www.codewars.com/kata/55a5befdf16499bffb00007b

//arguments for each of the functions will be integers, I'm assuming since it doesn't mention other than for the divide function it says "both ineger and float divisions are accepted"
//output will be the integer/float result of running the function operation on the 2 arguments
//examples: addition(1,2)=>3, multiply(2,3)=>6, division(5,10)=>.5, modulus(4,2)=>0, exponential(2,3)=>8, subtraction(5,3)=>2


function add(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return Math.pow(a,b)
}
    
function subt(a,b){
    return a-b
}

//these are pretty straight forward, we'll use mathematical operators within the function blocks and return the result
//Instead of using Math.pow(a,b) I could have used a**b
//https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
let alphabet = 'abcdefghijklmnopqrstuvwxyz'
function aliasGen(first, last){
    return alphabet.includes(first[0].toLowerCase()) && alphabet.includes(last[0].toLowerCase()) ? `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}` : "Your name must start with a letter from A - Z."
}

//firstName and surname existed within the console on codewars.com
//'Alpha Payload' was what my name resulted in.

//The best practice answer used a regex to test the letters in each name, where I actually only tested the first letters of each name. It passed but I do see that I should have checked the rest of the letters of each name.
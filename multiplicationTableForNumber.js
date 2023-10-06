//https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
function multiTable(number) {
	let result = ''
  for(let i = 1; i<11; i++){
  	result += `${i} * ${number} = ${i*number}\n`
  }
  return result.substring(0, result.length-1)
}
console.log(multiTable(5))

/* optimally the code looks like this:

const multiTable = (number) => {
  let table = '';
  
  for(let i = 1; i <= 10; i++) {
    table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
  }

  return table;
}

I'll add this code to my anki deck so I can learn to use a ternary operator within a template literal*/
//https://www.codewars.com/kata/5556282156230d0e5e000089
function DNAtoRNA(dna) {
  return dna.split('').map(x=>{
    if(x==='T'){
      return x='U'
    }else{
      return x
    }
  }).join('')
}
console.log(DNAtoRNA('GCAT'))
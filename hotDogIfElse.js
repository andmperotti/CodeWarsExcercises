//https://www.codewars.com/kata/57202aefe8d6c514300001fd
function saleHotdogs(n){
  if(n<5){
    return 100 *n
  }else if(n>=5 && n<10){
    return 95 *n
  }else{
    return 90 *n
  }
}

/*
The better way to do it is using ternary:
function saleHotdogs(n){
  return n*(n<5?100:n<10?95:90);
}
I'll add this to my Anki
*/
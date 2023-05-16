function stringClean(s){
  let tempArr = s.split('')
  for(let i = 0; i<tempArr.length; i++){
    switch(tempArr[i]){
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        delete tempArr[i];
        i--;
        break;
      default:
        break;
    }
  }
  return tempArr.join('')
}
console.log(stringClean("Dsa32 cdsc34232 csa!!! 1I 4Am cool!"))

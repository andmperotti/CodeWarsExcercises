//https://www.codewars.com/kata/57a37f3cbb99449513000cd8
function getNumberFromString(s) {
  let tempArr = s.split('')
  let result = []
  for(let i = 0; i<tempArr.length; i++){
  	switch(s[i]){
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
	  		result.push(s[i]);
	  		break;
	  	default:
	  		break;
  	}
  }
    	return Number(result.join(''))
}

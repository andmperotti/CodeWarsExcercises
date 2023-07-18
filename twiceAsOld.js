//https://www.codewars.com/kata/5b853229cfde412a470000d0
function twiceAsOld(dadYearsOld, sonYearsOld) {
  if(dadYearsOld<(sonYearsOld*2)){
  	for(let i = dadYearsOld; i>0; i--){
  		if(i==(sonYearsOld*2)){
  			return dadYearsOld-i
  		}
  		sonYearsOld--
  	}
  }else if(dadYearsOld>(sonYearsOld*2)){
  	for(let i = dadYearsOld; i>0; i++){
  		if(i==(sonYearsOld*2)){
  			return i-dadYearsOld
  		}
  		sonYearsOld++
  	}
  }else{
  	return +0
  }
}
console.log(twiceAsOld(36,0))

//best answer was:
// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - 2 * sonYearsOld);
// }
//https://www.codewars.com/kata/57faf7275c991027af000679

function remove(s,n){
	s = s.split('')
  while(n>0){
  	for(let i = 0; i<s.length-1; i++){
  		if(s[i]==='!'){
  			s.splice(i,1)
  			n--
  		}
  	}
  	break
  }
  return s.join('')
}

console.log(remove('!andrew!',3))

//This didn't work and after 20 minutes I've given up and will try again next week, I do see that the best pratice, according to votes, uses the replace method, which is in my Anki deck yet I didn not recall it from memory.
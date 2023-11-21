//https://www.codewars.com/kata/5761a717780f8950ce001473
function  calculateAge(a,b) {
	if(a<b){
			if(b-a>=2){
				return `You are ${b-a} years old.`
			}else if(b-a==1){
				return `You are ${b-a} year old.`
			}
	}else if(a>b){
		if(a-b>=2){
			return `You will be born in ${a-b} years.`
		}else if(a-b==1){
			return `You will be born in ${a-b} year.`
		}
	}else{
		return `You were born this very year!`
	}
}


//https://www.codewars.com/kata/57f222ce69e09c3630000212
function well(x){
	let good = 0;
	for(let i = 0; i <=x.length; i++){
		if(x[i]=='good'){
			good+=1
		}
	}
	if(good >2){
		return 'I smell a series!'
	}else if(good >0 && good<3){
		return 'Publish!'
	}else{
		return 'Fail!'
	}
}
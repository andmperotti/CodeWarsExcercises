//https://www.codewars.com/kata/577a98a6ae28071780000989
var min = function(list){
    let result = list[0]
    for(let i = 0; i<list.length; i++){
    	if(list[i]<result){
    		result=list[i]
    	}
    }
    return result
}

var max = function(list){
	let result = list[0]
	for(let i = 0; i<list.length; i++){
		if(list[i]>result){
			result=list[i]
		}
	}
	return result
}
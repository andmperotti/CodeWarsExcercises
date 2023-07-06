//https://www.codewars.com/kata/58649884a1659ed6cb000072
function updateLight(current) {
	if(current==='green'){
		return 'yellow'
	}else if(current==='yellow'){
		return 'red'
	}else if(current==='red'){
		return 'green'
	}
}
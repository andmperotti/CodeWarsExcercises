//https://www.codewars.com/kata/57b58827d2a31c57720012e8
function fuelPrice(litres, pricePerLitre) {
	if(!Number(litres) || !Number(pricePerLitre)){
  		return 'One of your inputs was not an integer';
  	}
	switch(true){
		case litres >= 10:
			return Number((litres * (pricePerLitre - .25)).toFixed(2))
			break;
		case litres >=8:
			return Number((litres * (pricePerLitre - .20)).toFixed(2))
			break;
		case litres >= 6:
			return Number((litres * (pricePerLitre - .15)).toFixed(2))
			break;
		case litres >=4:
			return Number((litres * (pricePerLitre - .10)).toFixed(2))
			break;
		case litres >=2:
			return Number((litres * (pricePerLitre - .05)).toFixed(2))
			break;
		default:
			return Number((litres * pricePerLitre).toFixed(2))
			break;
	}
}
console.log(fuelPrice(1, 3))

  	//litres >=2 get 5 cents off per litre
  	//litres >=4 get 10 cents off per litre
  	//so on; 
  	//litres >=6 get 15 cents off per litre
  	//litres >=8 get 20 cents off per litre
  	//litres == 10 get 25 cents off per litre

  	//But total discount per litre cannot be more than 25 cents

  	//return the toal cost rounded ot 2 decimal places
  	//Also validate inputs to be only numeric
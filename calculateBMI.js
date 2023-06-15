//https://www.codewars.com/kata/57a429e253ba3381850000fb
function bmi(weight, height) {
	let bmi = weight/(height*height)
	switch(true){
	case bmi<=18.5:
		return 'Underweight';
		break;
	case bmi<=25:
		return 'Normal';
		break;
	case bmi<=30:
		return 'Overweight';
		break;
	case bmi>30:
		return 'Obese';
		break;
	default:
		return 'Check calculations'
	}
}
console.log(bmi(85.729,1.8288))


//Body Mass Index (BMI) is a person's weight in kilograms (or pounds) divided by the square of height in meters (or feet).

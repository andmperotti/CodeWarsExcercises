//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296
function howMuchILoveYou(nbPetals) {
    switch(true){
    case nbPetals%6==1:
    	return "I love you";
    	break;
    case  nbPetals%6==2:
    	return "a little";
    	break;
    case nbPetals%6==3:
    	return "a lot";
    	break;
    case nbPetals%6==4:
    	return "passionately";
    	break;
    case nbPetals%6==5:
    	return "madly";
    	break;
    case nbPetals%6==0:
    	return "not at all";
    	break;
    }
}
console.log(howMuchILoveYou(8))
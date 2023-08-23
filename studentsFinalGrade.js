function finalGrade (exam, projects) {
  let result;
  switch(true){
      case (exam>90||projects>10):
      	result=100;
      	break;
      case(exam>75&&projects>=5):
      	result=90;
      	break;
      case(exam>50&&projects>=2):
      	result=75;
      	break;
      default:
      	result=0;
      	break;
  }
  return result
}

console.log(finalGrade(50,20))
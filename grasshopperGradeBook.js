//https://www.codewars.com/kata/55cbd4ba903825f7970000f5
function getGrade (s1, s2, s3) {
  let result = (s1+s2+s3)/3
  switch(true){
      case(result>=90&&result<=100):
        return 'A';
        break;
      case(result>=80&&result<90):
        return 'B';
        break;
      case(result>=70&&result<80):
        return 'C';
        break;
      case(result>=60&&result<70):
        return 'D';
        break;
      case(result<60):
        return 'F';
        break;
  }
}
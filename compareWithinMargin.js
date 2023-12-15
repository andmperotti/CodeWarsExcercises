//https://www.codewars.com/kata/56453a12fcee9a6c4700009c
function closeCompare(a, b, margin=0){
  if(margin>=(Math.abs(b-a))){
  	return 0
  }else if(a<b){
  	return -1
  }else if(a>b){
  	return 1
  }
}
//After testing I had to add the Math.abs() to enclose our b-a, it could have been a-b, absolute value means it would return the same value just not positive or negative
//the trailing else ifs were the 2 outcomes possible if margin === 0, aka if margin didn't recieve an argument value.
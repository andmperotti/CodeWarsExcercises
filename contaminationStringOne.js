//https://www.codewars.com/kata/596fba44963025c878000039
function contamination(text, char){
  if(text===''||char===''){
  	return ""
  }else{
  	return text.split('').fill(char).join('')
  	}
}
//https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
function htmlspecialchars(formData) {
  let formSplit = formData.split("")
  for(let i = 0; i<formSplit.length; i++){
  	if(formSplit[i]==="<"){
  		formSplit.splice(i,1, "&lt;")
  	}else if(formSplit[i]===">"){
  		formSplit.splice(i,1, "&gt;")
  	}else if(formSplit[i]==='"'){
  		formSplit.splice(i,1,"&quot;")
  	}else if(formSplit[i]==="&"){
  		formSplit.splice(i, 1, "&amp;")
  	}
  }
  return formSplit.join("")
}
console.log(htmlspecialchars("<h2>Hello World</h2>"))

//I don't currently know how to use the replace method, and most of the 'best practice' answers sumbmitted used it so I found a way to chain ifs and use the splice method to get the wanted behaviour. Maybe at another time I can redo this once I've cemented replace in my head.
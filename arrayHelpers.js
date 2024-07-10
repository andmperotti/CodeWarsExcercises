//https://www.codewars.com/kata/525d50d2037b7acd6e000534

//we need to create 6 methods on the Array object, which are used on an array and return:
//an array of the argument array elements squared
//an array of the argument array elements cubed
//a value that is the average of the argument arrays elements
//a sum of the argument arrays elements
//an array of the argument arrays even valued element values
//an array of the argument arrays odd valued element values

Array.prototype.square = function(){
	return this.map(e=>e*e)
}
console.log([1,2,3].square())
//[1,4,9]

Array.prototype.cube= function(){
	return this.map(e=>e*e*e)
}
console.log([1,2,3].cube())
//[1, 8, 27]

Array.prototype.average = function(){
	return this.reduce((acc,cur)=>acc+cur,0)/this.length
}
console.log([1,2,3].average())
//2

Array.prototype.sum = function(){
	return this.reduce((acc, cur)=>acc+cur, 0)
}
console.log([1,2,3].sum())
//6

Array.prototype.even = function(){
	return this.filter(e=>e%2===0)
}
console.log([1,2,3,4].even())
//[2, 4]

Array.prototype.odd = function(){
	return this.filter(e=>e%2!==0)
}
console.log([1,2,3,4,5].odd())
//[1,3,5]

//these worked, I could have used less lines of code by not new line indenting, as I didn't really need to, or I could have used arrow functions but I was hesitant becuse we were going to use the this keyword and I didn't think about where its use would be (it was not used in the functions, it was only used to reference the array object to call the method on, therefore not referencing a lexical scope in a statement).
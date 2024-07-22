//https://www.codewars.com/kata/547c71fdc5b2b38db1000098

//we're given a constructor function someone already made, however it's not working as they wanted it to and we need ot find why.

//arguments are 2 strings which represent a persons first and last name
//output should be possible with any of the 2 properties and the return string they built in as well, however that right now is accessible when someone logs their instance object I believe

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

// let drew = new NameMe('drew', 'p')
// console.log(drew)//i think this logs the return statement, it did
// console.log(drew.firstName) //in a correctly written constructor this should evaluate to 'drew', instead logged 'undefined'
// console.log(drew.lastName) //in a correctly written constructor this should evaluate to 'p', instead logged 'undefined'


//I deleted the return statement and to my suspiciouns I was correct in that it was interferring with returning specific properties to an instance after it was declared. So the properties are set but when the return statement gets executed that is what the object wants to return from the instance.

//so we'll go ahead and change the return statement to a 'name' property

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName
} 
let drew = new NameMe('drew', 'p')
console.log(drew)//i think this logs the return statement, it did
console.log(drew.firstName) //in a correctly written constructor this should evaluate to 'drew', it did now
console.log(drew.lastName) //in a correctly written constructor this should evaluate to 'p', it did now
console.log(drew.name) //expecting a return of 'drew p'
//Or could have used template strings; `${this.firstName} ${this.lastName}`
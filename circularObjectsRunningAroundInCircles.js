//https://www.codewars.com/kata/57078c56924f34f763000b3f/train/javascript

class Thing {
  constructor(a){
    this.value = a;
    this.self = this
  }
}

let circular = new Thing('Hello World')

//I tested with an object literal for a short amount of time and then I thought well I know how to reference an object when using a constructor by using the 'this' keyword, so I created a class which creates an object with 2 values, one 'value' which is equal to an argument which we pass in 'Hello World', the other 'self' which points to the object instance being made.

//Initially I thought about creating the object with just 'value' as a property and then adding the self referential property and value pair but instead used the above code. Little did I know that that was the best practice voted answer.

//I'm going to create an Anki card for this, as I don't want to forget it.

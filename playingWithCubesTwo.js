//https://www.codewars.com/kata/55c0ac142326fdf18d0000af
// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {

  constructor(int){
  	if(int===undefined){
		
	}
  	this.int = int;
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.sign(n)==-1? +n : -n
  }
}

//I'll have to try this one again another day...
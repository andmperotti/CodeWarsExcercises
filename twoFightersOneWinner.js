//https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

// DESCRIPTION:
// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }


//arguments are objects created from a Fighter constructor function, and a string with the name of the fighter who attacks first. the constructor function parameters are: a fighter name, their health pool, and the amount of damage they deal per attack.
//output will be a string of the name of the winner of the fight.
//example: declare_winner(new Fighter("Drew", 20, 1), new Fighter("Steven", 10, 3))=>"Steven"
//the example didn't use new...   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
	//use a while loop and use both fighters health pools >0 as the condition.
	//use temp variables to keep track of which fighter is next to attack, and a variable to keep track of who is the defender
	let offense = firstAttacker===fighter1.name? fighter1 : fighter2
	let defense = (firstAttacker===fighter1.name ? fighter2 : fighter1)
	//this way we can minus the attack from the correct health pool, and then swap the attacker and defender values for the next fighter to attack
	//after loop runs return the fighters name whose health pool is greater than 0
	//use an if else to console log either just the summary of the attack and its effect on the defenders health pool, or the summary of the attack and the death of a fighter announcing the winner.
	while(fighter1.health>0&&fighter2.health>0){
		defense.health = defense.health-offense.damagePerAttack
		if(defense.health>0){
			console.log(`${offense} attacks ${defense}; ${defense} now has ${defense.health} health.`)
		}else{
			console.log(`${offense} attacks ${defense}; ${defense} now has ${defense.health} health and is dead. ${offense.name} wins.`)
		}
		let placeholder = offense
		offense = defense
		defense = placeholder
	}
	//finally return the winners name
	return fighter1.health>0 ? fighter1.name : fighter2.name
}
console.log(declareWinner(new Fighter("Drew", 20, 1), new Fighter("Steven", 10,3), "Drew"))


//my code worked but it could have been better, here is the best practice answer:
// function declareWinner(fighter1, fighter2, firstAttacker) {
//   var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
//   var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
//   if(fac1 < fac2) {
//     return fighter2.name;
//   } else if(fac2 < fac1) {
//     return fighter1.name;
//   } else {
//     return firstAttacker;
//   }
// }
//they created a variable that holds the rounded up value of the first fighters health pool divided by the damage per hit of the second fighter, then made a second variable with the roles switched.
//They then checked whether the value from the first variable was less than the value of the second fighter and if so returned the second fighters name, else if the second variable was less than the first variable they returned the first fighters name, and in case the variables were equal they returned the name of the fighter who attacks first because if both fighters health pools are tied and above 0 then the next fighter to deal damage is the winner.

//I first read the description of this challenge as only needing to return the name of the winner but then later when I looked at their example code they had these statements that summarized each turn, so I thought they were needed, oh well.
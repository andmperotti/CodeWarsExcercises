//https://www.codewars.com/kata/57b06f90e298a7b53d000a86

// //arguments are an array of integers, each integer represents the amount of time individual customers take to get through the self checkout line, and an integer which represents the number of self checkout tils at the store.
// //ouput will be an integer which represents the total amount of time of all the customers from the argument array
// //example: ([5,3,4],1)=>12, ([10,2,3,3],2)=>10, ([2,3,10],2)=>12

// //additional notes: there is only one queue to the tils, the order of the queue NEVER changes, and the front person in the queue (first element in the integer array) proceeds to a til as soon as it becomes free.
// //Notes that this challenge is closely related to the thread pool, with relation to running multiple processes at the same time.

// //first try:
// // function queueTime(customers, n) {
// // 	//lets build an object that represents the checkout area tils in the store
// // 	let tils  = {}
// // 	//lets use a for loop to create the number of tills the argument requires
// // 	for(let i = 1; i<=n; i++){
// // 		tils[i] = 0
// // 	}
// // 	//we'll use a while loop to complete this function, as it iterates you can think of each iteration as a minute, it's stopping condition will be when there are no customers in the queue or at a til
// // 		//we'll check the tils if they are busy, if not then we'll move a value (customer) from the queue (customers array) to a specific open til
// // 	let accumulatedTime = 0

// // 	//So for the first condition we'll use object.keys to return an array of the properties inside our til object, and then we'll use the some array method with a callback function to check if any of the tils have a value greater than 0, which would mean that there are still customers at self checkout tils. The second expression in our or'd while loops condition, is checking to see if any customers are still in the queue.
// // 	while(Object.keys(tils).some((t)=>tils[t]>0) || customers.length>0){
// // 		accumulatedTime+=1
// // 		//for in look to iterate over properties of tils object
// // 		for(let eachTil in tils){
// // 			//if current iteration til is empty, fill it with the next customer
// // 			if(tils[eachTil]===0){
// // 				tils[eachTil]=customers.shift()
// // 			}
// // 			//subtract 1 value from each customer if their value is greater than 0
// // 			if(tils[eachTil]>0){
// // 				tils[eachTil]-=1		
// // 			}
// // 		}
// // 	}
// // 	return accumulatedTime
// // }
// // console.log(queueTime([1,2,3,4,5], 100))


// //second try:
// function queueTime(customers, n) {
// 	//we'll build an array to represent each of the tils (n), that way we can manage customers there
// 	let tils = Array.from({length: n}, ()=>0)
// 	//we'll use a while loop to run while there are customers at tils (any element with a value >0), also create a temp variable before this loop to store the acumulated minutes, aka each iteration, and increment it each time the while loop iterates.
// 	let accumulatedTime = 0
// 	while(customers.length>0 || tils.some(til=>til>0)){
// 		//increment over the tils and check whether any are empty (===0) and if there are customers waiting, if both are true then the current iterated til will now be equal to the value representing the next customer
// 		tils.forEach((til, i, tils)=>{
// 			if(til===0 && customers.length>0){
// 				tils[i]=customers.shift()
// 			}
// 		})
// 		//Using another forEach we'll iterate over all tils and decrement their values by 1, unless their value is 0 then we'll leave it alone
// 		tils.forEach((til, i, tils)=>{
// 			if(til>0){
// 				tils[i]-=1
// 			}
// 		})
// 		//increment the accumulated time 
// 		accumulatedTime+=1

// 	}
// 	//return the accumulated time
// 	return accumulatedTime
// }
// //This code worked.
// //I had a few problems with this challenge, specifically usign objects first when I could have used arrays, and secondly came how to structure the code to be able to follow certain timings of steps.

// //here's the best practice answer:
// // function queueTime(customers, n) {
// //   var w = new Array(n).fill(0);
// //   for (let t of customers) {
// //     let idx = w.indexOf(Math.min(...w));
// //     w[idx] += t;
// //   }
// //   return Math.max(...w);
// // }
// //It uses new Array(n).fill(0), to build a tils array.
// //uses a for loop to iterate over the customers array, each time creating a varaible which is the result of calling indexOf on its tils equivalent array looking for the lowest value in the array. Then using that value it adds the customer to that til array element index position.
// //So instead of looping per minute, they are simply adding the customers to their eventual til/self checkout to calculate the time it'll take the highest occupied til to be completed of its customers.
// //I honestly didn't think about this direction at all, wish I did.

// //I'll actually attempt this again on Monday.






//6/17 attempt, did not look at anything above, and am commenting it all out right now

//arguments are an array of integers, where each integer represents a customer and the amount of time it takes for them to self check themselves out at a grocery store, the second argument is an integer which reflects the number of self checkout tils of a store.
//output will be an integer which represents the total time needed for the customers in the queue to finish all of their transactions.
//examples: ([5,3,4],1)=>12, ([10,2,3,3],2)=>10, ([2,3,10],2)=>12


// function queueTime(customers, n) {
// 	//we'll build an array to represent the group of self checkout tils, that way we can process customers into tils
// 	let tils = new Array(5).fill(0)
// 	//we'll use some Math object methods to fill the tils of their eventual customers. So this way we use logic to place the customers into the next available til, and create a total sum of the tils cutstomers minutes
// 	let shortest = Math.min(...tils)
// 	customers.forEach(c=>tils[shortest]+=c)
// 	//then using Math.max() and passing the array of prefilled tils, we'll return the til that takes the longest amount of time thus giving us our answer
// 	return tils
// }
// console.log(queueTime([10,2,3,3],2))

//nope failed it again, will try it tomorrow

// function queueTime(customers, n) {
//   var tils = new Array(n).fill(0);
//   for (let c of customers) {
//     let next = tils.indexOf(Math.min(...tils));
//     tils[next] += c;
//   }
//   return Math.max(...tils);
// }
// console.log(queueTime([1,2,3,4,5],2))

//just reviewed the best practice answer, and changed their variable names to the ones I was using to let my brain diffuse what it's doing, will try again tomorrow or later this week








//6/19 attempt

//arguments are an array of integers which repersents customers in a queue and the amount of time it takes for them to finish self checking their products, the second argument is an integer which represents the number of self checkout tils at the store
//output will be an integer representing the total time it took to process the customers in the queue through the stores til/s
//example: ([5,3,4],1)=>9, ([10,2,3,3],2)=>10

function queueTime(customers, n) {
	//create an array of tils, using the n argument
	let tils = new Array(n).fill(0)
	//using the array of tils, iterate over the customers in the queue and place them in the til that will be available soonest
	customers.forEach((c,i)=>tils[tils.indexOf(Math.min(...tils))]+=customers[i])
	//return the amount of time it'll take to empty the queue and process the customers through the tils by returning the highest value in any of the tils (since we preloaded the tils with the correct customer order, the  highest value til will be the maximum amount of time needed for the entire process to complete)
	return Math.max(...tils)
}
console.log(queueTime([10,2,3,3],2))

//This code worked, however there's better syntax to use:
// function queueTime(customers, n) {
//   var w = new Array(n).fill(0);
//   for (let t of customers) {
//     let idx = w.indexOf(Math.min(...w));
//     w[idx] += t;
//   }
//   return Math.max(...w);
// }
//this best practice answer use a for loop not forEach which allowd easier to read code, however at the price of more lines.
//They created an array using the same logic I did. They used a for loop and set a variable of 't' to represent each customer, then crated a variable that held the index of the lowest til up to that point and then used that vairable to add the customer to that til using the array vairable square brackets around the variable that found the next lowest and added in the customer. They returned the maximum value of the til array.
//https://www.codewars.com/kata/57ed30dde7728215300005fa

//argument will be a string made up of bumps 'n' and flat road '_'
//output will be a string of 'Woohoo!' if there are 15 or less bumps in the argument string, else if there are more than 15 then the output will be 'Car Dead'
//examples: bump('_n_n_n')=>'Woohoo!', bump('_nnnnnnnnnnnnnnnn_')=>'Car Dead'

function bump(x){
	return x.split('').filter(e=>e==='n').length <=15 ? 'Woohoo!' : 'Car Dead'
}


//we can split the string into an array and run filter method to pull out the bumps 'n', and then use the length property to then compare that value against less than or equal to 15, if so return 'Woohoo!' else return 'Car Dead'

console.log(bump('nnnnnnnnnnnnnnn_'))

//this answer worked and was very similar to the best practice answer.
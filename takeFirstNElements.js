//https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript
// function take(arr, n) {
//   return arr.filter(x=>arr.indexOf(x) < n)
// }
// console.log(take([-2,63,4,39,27,6,-15,17,-51,-23,-83,16,69,8,12,31,-46,-4,45,53,-51,53,-6,42,15,-65,24,82,12,26,18,-24,12,-4,-55,-5,64,70,40,-34,-45,-16,-15,14,-19,65,7,-50,-39,-3,-59,60,4,12,-5,-70,51,70,30,63,-18,15,15,-37,-10,24,-19,-16,-17,-30,62,53,-36,-71,50,-46,40,-85,-25,-82,-24,87,-58,-8],23))
//wrong^

//right:
function takeTwo(arr, n){
	return arr.slice(0, n)
}
console.log(takeTwo([-2,63,4,39,27,6,-15,17,-51,-23,-83,16,69,8,12,31,-46,-4,45,53,-51,53,-6,42,15,-65,24,82,12,26,18,-24,12,-4,-55,-5,64,70,40,-34,-45,-16,-15,14,-19,65,7,-50,-39,-3,-59,60,4,12,-5,-70,51,70,30,63,-18,15,15,-37,-10,24,-19,-16,-17,-30,62,53,-36,-71,50,-46,40,-85,-25,-82,-24,87,-58,-8],23))
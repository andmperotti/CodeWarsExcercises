//https://www.codewars.com/kata/524f5125ad9c12894e00003f
// function remainder(a, b){
//   return a > b ? a % b : b % a;
// }

// console.log(remainder(1,0))





//12/11 attempt:

// function remainder(n, m){
//   n= Math.abs(n)
//   m=Math.abs(m)
//   if(n>m){
//     return n%m;
//   }else if(m>n){
//     return m%n
//   }else if(n===0&&m===0){
//     return NaN
//   }else if(n==0&&m!=0){
//     return n%m
//   }else if(n!=0&&m==0){
//     return m%n
//   }else{
//     return n%m
//   }
// }
// console.log(remainder(17,5))
// console.log(remainder(-13,-13))
// console.log("///////")
// console.log(remainder(0, -1))
// console.log(-1%0)


function remainder(a, b){
  return a > b ? a % b : b % a;
}


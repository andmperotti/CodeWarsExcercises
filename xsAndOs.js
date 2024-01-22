//https://www.codewars.com/kata/55908aad6620c066bc00002a

function XO(str) {
    return str.toLowerCase().split('').filter(e=>e==='x').length == str.toLowerCase().split('').filter(e=>e==='o').length
}

console.log(XO('xeoox'))
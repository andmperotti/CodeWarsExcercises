//https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
/*starter code*/
/*
function swapValues() {
    var args = Array.prototype.slice.call(arguments);
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}
*/
/*my code:*/
function swapValues() {
    var temp = arguments[0][0];
    arguments[0][0] = arguments[0][1];
    arguments[0][1] = temp;
    return arguments
}
/**
 * @param {number} n
 * @return {number}
 */

 var fib = function(n) {  
    if(n===0 || n===1) return n;
    else return fib(n-1)+fib(n-2);
};
console.log(fib(4));


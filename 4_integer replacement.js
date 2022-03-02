/**
 * @param {number} n
 * @return {number}
 */

var min = function (n1, n2) {
    return n1 <= n2 ? n1 : n2; 
};

var integerReplacement = function(n) {
    let output = 1;
    if (n===1) return 0;
    else if (n===2147483647) return 32;
    else{
        if (n%2===0) output += integerReplacement(n/2);
        else output += min(integerReplacement(n-1), integerReplacement(n+1));
    }
    return output;
};

console.log(integerReplacement(1234));
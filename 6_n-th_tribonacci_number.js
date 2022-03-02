/**
 * @param {number} n
 * @return {number}
 */

 var tribonacci = function(n) { 
    let temp = [0, 1, 1];
        if (n <= 2) return temp[n];
        for (let i = 3; i <= n; ++ i) {
            let a = temp[0] + temp[1] + temp[2];
            temp[0] = temp[1];
            temp[1] = temp[2];
            temp[2] = a;
        }
        return temp[2];
};
console.log(tribonacci(34));


/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let output = new Array (n+1);
    output[0] = 0;
    let temp;
    for (let i = 1; i <= n; i++){
        output[i] = 0;
        temp = i.toString(2);
        for (let j = 0; j<temp.length; j++){
            if (temp.charAt(j) === "1") output[i]++;
        }
    }
    return output;
};

console.log(countBits(5));
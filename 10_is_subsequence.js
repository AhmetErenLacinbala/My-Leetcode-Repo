/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s===t) return true;
    let char_num = 0
    let check = s.charAt(char_num)
    for (let i = 0; i < t.length; i++){
        if (check === t.charAt(i) ){
        char_num++;
        check = s.charAt(char_num);
        } 
        if (char_num === s.length) return true;
    }  
    return false;
};
let a = "";
console.log(a);
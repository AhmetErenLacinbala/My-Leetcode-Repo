/**
 * @param {string} s
 * @return {number}
 */



var myAtoi = function(s) {
    number = 0;

    let check = 0;
    let negative = false;
    let zero = true;

    let trueString ="";
    for (let i = 0; i < s.length; i++){
        let charTemp = s.charCodeAt(i);
        if ((charTemp<=57 && charTemp >= 49)){
            trueString += String.fromCharCode(charTemp);
            zero = false;
            check++;       
        }
        else if (charTemp === 48) { // 0
            if (zero === false)trueString += "0";            
            check++;
        }
        else if (charTemp === 45 || charTemp === 43){ // + -
            check++;
            if (check >= 2) break;
            if (charTemp === 45) trueString += "-";
        }
        else if (charTemp === 32 && check) break;
        else if (charTemp!=32) break; // 0 + _
        
    }
    if (trueString.charCodeAt(0)===45) negative = true;
    let sLength = trueString.length;
    if (negative === true && sLength > 11){
        return -2147483648;
    }
    else if (negative === false && sLength > 10){
        return 2147483647;
    }


    
    if(negative===true && sLength === 11){
        for(let i = 1; i < sLength+1 ; i++){
            let charTemp = trueString.charCodeAt(i)-48;
            console.log(charTemp);
            if(charTemp > "2147483648;".charCodeAt(i-1) - 48){
                return -2147483648;
            }
            else if (charTemp < "2147483648;".charCodeAt(i-1) - 48) break;
        }
    }
    else if (negative===false && sLength === 10){
        for(let i = 0; i < sLength ; i++){
        let charTemp = trueString.charCodeAt(i)-48;
        console.log(charTemp);
        if(charTemp > "2147483647;".charCodeAt(i) - 48){
            return 2147483647;
            }
        else if (charTemp < "2147483647;".charCodeAt(i) - 48) break;
        }
    }

    check = 0;
    for(let i = sLength - 1; i >= 0 ; i--){
        let charTemp = trueString.charCodeAt(sLength - (i+1))-48;
        if (charTemp<=9 && charTemp >= 0) number += (charTemp)*Math.pow(10,i);      
    }
    if (negative===true) return number*-1;
    else return number; 
};

console.log(myAtoi("-147436149"));
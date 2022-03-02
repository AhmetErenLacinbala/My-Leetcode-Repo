/**
 * @param {number} n
 * @return {number}
 */

var totalMoney = function(n){
    let startValue = 1;
    let money = 0;
    while (n>0){
        if (n<8){
            for (let i = startValue; i < startValue + n; i++ ){
                money += i;
            }
            return money;
        }
        else{
            for(let i = startValue; i < startValue + 7; i++){
                money += i;
                n--;
            }

        }
        startValue++;
    }
    return money;
}


console.log(totalMoney(8));
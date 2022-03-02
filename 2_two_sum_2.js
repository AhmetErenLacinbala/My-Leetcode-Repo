
var twoSum = function(numbers, target) {  
    let left = 0;
    let right = numbers.length -1;
    while (1){
        let sum = numbers[left] + numbers[right];
        if (sum===target) {
            return [++left, ++right];
            }
        if (sum>target) {
            right--;
            continue;}
        else {
            left++;
            continue;
        }
    }   
}

console.log(twoSum([2,7,11,15],9));
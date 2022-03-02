
var twoSum = function(nums, target) {
    var hasht = {};
    var temp;
    for (let i = 0; i<nums.length; i++){
        temp = target - nums[i];

        if (hasht[temp] === undefined ){

            hasht[temp] = i;
            hasht[nums[i]] = i;
                
        } else if (nums[hasht[temp]]+nums[i]===target) {
            return [hasht[temp],i];
        }
        
    }
};


console.log(twoSum([1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1],11));

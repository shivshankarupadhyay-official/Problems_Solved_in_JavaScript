let nums = [1, 2, 3, 2, 4, 1, 5, 3];
let dublicates = [];

for(let i = 0;i<nums.length;i++){
    if(!dublicates.includes(nums[i]) && nums.at(i)!==nums.lastIndexOf(nums[i])){
        dublicates.push(nums[i]);
    }
}
console.log(dublicates);
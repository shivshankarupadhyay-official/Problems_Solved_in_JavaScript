let nums = [34, 12, 89, 56, 90, 23];
let larg = nums[0];

for (let i = 0;i<nums.length;i++){
    if (nums[i]>larg){
        larg = nums[i];
        
    }
}
console.log(larg);
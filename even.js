let nums = [12, 5, 8, 19, 20, 7, 4];

let ns = [];

for(let i = 0;i<nums.length;i++){
    if (nums[i]%2 == 0){
        ns.push(nums[i]);
    }
}
console.log(ns);
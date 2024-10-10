function twoSum(nums: number[], target: number): number[] {
    const hashmap: { [key: number]: number } = {};
     for (let i = 0; i < nums.length; i++) {
         const num = nums[i];
         const complement = target - num;
         if (complement in hashmap) {
             return [hashmap[complement], i];
         }
         hashmap[num] = i;
     }
     return []; 
 };
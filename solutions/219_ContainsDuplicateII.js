/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

  let recordObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in recordObj) {
      for (let j of recordObj[nums[i]]) {
        if (Math.abs(i - j) <= k) {
          return true;
        }
      }
      recordObj[nums[i]].push(i);
    } else {
      if (!recordObj[nums[i]]) {
        recordObj[nums[i]] = [];
      }
      recordObj[nums[i]].push(i);
    }
  }

  return false;
};
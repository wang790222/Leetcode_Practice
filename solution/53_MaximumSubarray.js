/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {

  if (nums.length === 0) {
    return 0;
  }

  let maxEndHere  = nums[0];
  let maxEndSoFar = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxEndHere = Math.max(nums[i], maxEndHere + nums[i]);
    maxEndSoFar = Math.max(maxEndHere, maxEndSoFar);
  }

  return maxEndSoFar;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

  let left = 1;
  let right = 1;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(left);
    left *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
};
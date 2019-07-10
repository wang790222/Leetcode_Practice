/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {

  if (nums.length < 2) {
    return nums;
  }

  for (let i = 0; i < k; i++) {

    let tempTear = nums[nums.length - 1];
    for (let j = nums.length - 1; j >= 1; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = tempTear;
  }

  return nums;
};
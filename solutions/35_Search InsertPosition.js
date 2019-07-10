/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

  let previousNum = Number.MIN_SAFE_INTEGER;
  for (let n of nums) {
    if (target === n) {
      return nums.indexOf(n);
    }

    if (target > previousNum && target < n) {
      return nums.indexOf(n);
    }
    previousNum = n;
  }

  return nums.length;
};
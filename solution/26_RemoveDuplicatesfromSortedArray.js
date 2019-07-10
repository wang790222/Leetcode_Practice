/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let previousNum = null;
  let index = 0;
  while (index < nums.length) {
    if (previousNum !== nums[index]) {
      previousNum = nums[index];
      index++;
    } else {
      nums.splice(nums.indexOf(nums[index]), 1);
    }
  }

  return nums.length;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

  let dup = 0;
  let prev = null;
  let i = 1;
  while(i < nums.length) {
    prev = nums[i - 1];
    if (prev === nums[i]) {
      dup++;
    } else {
      dup = 0;
    }

    if (dup >= 2) {
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  return nums.length;
};
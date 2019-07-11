/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

  if (nums.length === 0) {
    return [];
  }

  let head = 0;
  let tear = nums.length - 1;
  while (head < nums.length - 1) {

    if (nums[head] === 0) {

      let pioneer = head + 1;
      while (pioneer < nums.length - 1 && nums[pioneer] === 0) {
        pioneer++;
      }

      let temp = nums[head];
      nums[head] = nums[pioneer];
      nums[pioneer] = temp;

      head++;
    } else {
      head++;
    }
  }

  return nums;
};
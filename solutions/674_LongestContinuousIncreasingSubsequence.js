/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (!nums.length) {
    return 0;
  }

  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    let tempSum = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j - 1] < nums[j]) {
        tempSum++;
        if (tempSum > ans) {
          ans = tempSum;
        }
      } else {
        break;
      }
    }
  }

  return ans;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

  let [max, min, ans] = [nums[0], nums[0], nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < 0) {
      let temp = max;
      max = min;
      min = temp;
    }

    max = Math.max(nums[i], nums[i] * max);
    min = Math.min(nums[i], nums[i] * min);
    ans = Math.max(ans, max);
  }

  return ans;
};


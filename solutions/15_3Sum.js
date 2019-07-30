/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

  if (nums.length < 3) {
    return [];
  }

  let obj = {};
  let result = [];
  nums.sort(function (a, b) {
    return a - b;
  });

  let flag = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      flag = true;
      break;
    }
  }

  if (!flag) {
    return [[0, 0, 0]];
  }

  for (let i = 0; i < nums.length; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      let temp = nums[i] + nums[lo] + nums[hi];
      if (temp === 0) {
        if (!([nums[i], nums[lo], nums[hi]] in obj)) {
          obj[[nums[i], nums[lo], nums[hi]]] = true;
          result.push([nums[i], nums[lo], nums[hi]]);
        }
        hi--;
        lo++;
      } else if (temp > 0) {
        hi--;
      } else {
        lo++;
      }
    }
  }

  return result;
};
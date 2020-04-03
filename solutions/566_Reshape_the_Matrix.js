/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  if (!nums.length) {
    return [];
  }

  const n = nums[0].length, m = nums.length;
  let ans = [];

  if (m * n === r * c) {
    for (let i = 0; i < r * c; i = i + c) {
      let temp = [];
      for (let j = 0; j < c; j++) {
        temp.push(nums[(i + j) / n | 0][(i + j) % n]);
      }

      ans.push(temp);
    }

    return ans;
  } else {
    return nums;
  }
};
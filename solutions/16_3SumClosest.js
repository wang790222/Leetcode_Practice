/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {

  nums.sort(function(a, b) {
    return a - b;
  });

  let diffPos = Number.MAX_SAFE_INTEGER;
  let diffNeg = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 1; i++) {
    let lo = i + 1;
    let hi = nums.length - 1;
    while (lo < hi) {
      let temp = nums[i] + nums[lo] + nums[hi] - target;
      if (temp === 0) {
        return target;
      } else if (temp > 0) {
        diffPos = (temp < diffPos) ? temp : diffPos;
        hi--;
      } else {
        diffNeg = (-temp < diffNeg) ? -temp : diffNeg;
        lo++;
      }
    }
  }

  return (diffPos < diffNeg) ? (target + diffPos) : (target - diffNeg);
};
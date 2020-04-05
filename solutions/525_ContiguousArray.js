/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let ans = 0;
  let count = 0;
  nums.reduce((obj, n, index) => {
    if (n === 0) {
      count--;
    } else {
      count++;
    }

    if (!(count in obj)) {
      obj[count] = index;
    } else {
      ans = Math.max((index - obj[count]), ans);
    }

    return obj;
  }, {0: -1});

  return ans;
};
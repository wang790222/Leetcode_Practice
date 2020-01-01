/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let result
  return nums.reduce((result, n) => {
    result += (n.toString().length % 2 === 0) ? 1 : 0;
    return result;
  }, 0);
};
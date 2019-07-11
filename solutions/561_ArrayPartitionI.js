/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {

  let sum = 0;

  nums.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    sum += (i % 2 === 0) ? nums[i] : 0;
  }

  return sum;
};
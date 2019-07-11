/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {

  let total = (1 + nums.length) * nums.length / 2;
  console.log(total);
  for (let n of nums) {
    total -= n;
  }

  return total;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {

  let consutiveMax = 0;
  let temp = 0;
  for (let n of nums) {
    consutiveMax = Math.max(consutiveMax, temp += n);
    if (n === 0) {
      temp = 0;
    }
  }

  return consutiveMax;
};
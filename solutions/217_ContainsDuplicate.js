/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

  let recordObj = {};

  for (let n of nums) {
    if (n in recordObj) {
      return true;
    } else {
      recordObj[n] = true;
    }
  }

  return false;
};
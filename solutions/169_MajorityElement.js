/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

  let resultObj = {};

  for (let n of nums) {
    if (n in resultObj) {
      resultObj[n] += 1;
    } else {
      resultObj[n] = 1;
    }
  }

  let max = 0;
  let maxItem = null;
  for (let i in resultObj) {
    if (resultObj[i] > max) {
      max = resultObj[i];
      maxItem = i;
    }
  }

  return maxItem;
};
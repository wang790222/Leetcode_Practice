/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

  let obj = {};
  let result = [];
  let dup  = null;
  let miss = null;
  for (let n of nums) {
    if (!(n in obj)) {
      obj[n] = 1;
    } else {
      obj[n] = 2;
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      miss = i;
    }

    if (obj[i] === 2) {
      dup = i;
    }
  }

  result.push(dup);
  result.push(miss);
  return result;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

  if (nums.length === 0) {
    return [];
  }


  let obj = {};
  for (let n of nums) {
    if (!(n in obj)) {
      obj[n] = true;
    }
  }

  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (obj[i] === undefined) {
      result.push(i);
    }
  }

  return result;
};
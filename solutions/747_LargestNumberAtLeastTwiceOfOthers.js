/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {

  let max = Number.MIN_SAFE_INTEGER;
  let sec = Number.MIN_SAFE_INTEGER;

  for (let n of nums) {
    if (n > max) {
      sec = max;
      max = n;
    } else if (n > sec) {
      sec = n;
    }
  }

  return (max >= 2 * sec) ? nums.indexOf(max) : -1;
};
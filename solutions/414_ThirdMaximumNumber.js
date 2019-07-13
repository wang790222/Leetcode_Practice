/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

  let firstMax = Number.MIN_SAFE_INTEGER;
  let secondMax = Number.MIN_SAFE_INTEGER;
  let thirdMax = Number.MIN_SAFE_INTEGER;

  for (let n of nums) {
    if (n >= firstMax) {
      if (n !== firstMax) {
        thirdMax = secondMax;
        secondMax = firstMax;
      }
      firstMax = n;
    } else if (n >= secondMax) {
      if (n !== secondMax) {
        thirdMax = secondMax;
      }
      secondMax = n;
    } else if (n >= thirdMax) {
      thirdMax = n;
    }
  }

  return (thirdMax !== Number.MIN_SAFE_INTEGER) ? thirdMax : firstMax;
};
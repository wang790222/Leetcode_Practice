/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {

  if (num <= 0) {
    return false;
  }

  return Number.isInteger(Math.log(num) / Math.log(4));
};
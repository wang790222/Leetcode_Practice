/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {

  if (n <= 0) {
    return false;
  }

  return (Math.pow(3, 19) % n === 0);
};
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {

  if (num === 0) {
    return false;
  }

  if (num === 1) {
    return true;
  }

  for (let n = 2 ; n <= num; n++) {
    if (num % n === 0) {
      if ((num / n / n) === 1) {
        return true;
      }
    }
  }

  return false;
};
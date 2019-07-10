/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {

  if (x === 0) {
    return false;
  }

  let previousVal = 0;

  for (let i = 1; i <= x; i++) {
    if (i * i === x) {
      return i;
    }

    if (i * i < x) {
      previousVal = i;
    }

    if (i * i > x) {
      return previousVal;
    }
  }
};
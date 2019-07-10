/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  let numStr = n.toString();
  let missObj = {};

  while (!(numStr in missObj)) {

    missObj[numStr] = true;

    let numToStr = numStr.split("");

    let tempSum = 0;
    for (let n of numToStr) {
      tempSum += Math.pow(parseInt(n, 10), 2);
    }
    if (tempSum === 1) {
      return true;
    } else {
      numStr = tempSum.toString();
    }
  }

  return false;
};
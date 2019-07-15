/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {

  let sum = 0;
  A.forEach(function (e) {
    sum += e;
  });

  if (sum % 3 !== 0) {
    return false;
  }

  let tempSum = 0;
  let counter = 0;
  for (let n of A) {
    tempSum += n;
    if (tempSum === (sum / 3)) {
      counter++;
      tempSum = 0;
    }

    if (counter === 2) {
      return true;
    }
  }

  return false;
};
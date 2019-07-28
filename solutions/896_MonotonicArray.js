/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {

  let inc = false;
  let dec = false;
  for (let i = 0; i < A.length - 1; i++) {

    if (A[i] > A[i + 1]) {
      if (inc) {
        return false;
      }
      dec = true;
    } else if (A[i] < A[i + 1]) {
      if (dec) {
        return false;
      }
      inc = true;
    }
  }

  return true;
};
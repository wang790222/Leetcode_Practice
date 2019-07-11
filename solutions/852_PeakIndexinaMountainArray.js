/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {

  for (let i = 0; i < A.length - 2; i++) {
    if (A[i] < A[i + 1] && A[i + 1] > A[i + 2]) {
      return i + 1;
    }
  }

  return 0;
};
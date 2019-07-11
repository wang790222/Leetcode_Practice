/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {

  if (A.length === 0) {
    return 0;
  }

  let nonDArr = [];

  for (let i = 0; i < A[0].length; i++) {
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j][i] > A[j + 1][i]) {
        nonDArr.push(j);
        break;
      }
    }
  }
  return nonDArr.length;
};
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumAfterKNegations = function(A, K) {

  let arr = A.sort(function(a, b) {
    return a - b;
  });

  let i = 0;
  while (K > 0) {
    if (arr[i] === 0) {
      break;
    }

    arr[i] = (-1) * arr[i];
    if (arr[i] > arr[i + 1]) {
      i++;
    }

    K--;
  }

  return arr.reduce((a, b) => a + b );
};
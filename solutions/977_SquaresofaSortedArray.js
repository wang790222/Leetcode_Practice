/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {

    for (let i = 0; i < A.length; i++) {
      A[i] = A[i] * A[i];
    }

    return A.sort(function(a, b) {
        return a - b;
    });
};
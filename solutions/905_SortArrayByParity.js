/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {

    let frontIndex = 0;
    let tailIndex = A.length - 1;

    while (frontIndex < tailIndex) {
      if (A[frontIndex] % 2 === 1) {
        let temp = A[frontIndex];
        A[frontIndex] = A[tailIndex];
        A[tailIndex] = temp;
        tailIndex--;
      } else {
        frontIndex++;
      }
    }

    return A;
};
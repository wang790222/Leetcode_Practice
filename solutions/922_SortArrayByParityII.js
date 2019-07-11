/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {

  let evenArr   = [];
  let oddArr    = [];
  let resultArr = [];

  for (let a of A) {
    if (a % 2 === 0) {
      evenArr.push(a);
    } else {
      oddArr.push(a);
    }
  }

  for (let i = 0; i < A.length / 2; i++) {
    resultArr.push(evenArr[i]);
    resultArr.push(oddArr[i]);
  }

  return resultArr;
};
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
  let ans = [];

  if (A === B) {
    for(let i = 0; i < A * 2; i++) {
      ans[i] = (i % 2) ? 'a' : 'b';
    }

    return ans.join('');
  }

  let biggerChar = (A > B) ? 'a' : 'b';
  let smallerChar = (A > B) ? 'b' : 'a';
  let biggerNum = (A > B) ? A : B;
  let savedBiggerNum = biggerNum;
  let smallerNum = (A > B) ? B : A;

  for (let i = 0; i < savedBiggerNum * 2; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      ans[i] = (biggerNum > 0) ? biggerChar : '';
      biggerNum--;
    } else {
      ans[i] = '';
    }
  }

  for (let i = 0; i < savedBiggerNum * 2; i++) {
    if (i % 4 === 2) {
      if (smallerNum > 0) {
        ans[i] = smallerChar;
        smallerNum--;
      }
    }
  }

  if (smallerNum > 0) {
    for (let i = 0; i < savedBiggerNum * 2 && smallerNum > 0; i++) {
      if (i % 4 === 3) {
        ans[i] = smallerChar;
        smallerNum--;
      }
    }
  }

  return ans.join('');
};
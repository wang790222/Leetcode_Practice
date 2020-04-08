/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  const sArr = s.split('');
  let ans = 0;
  let countR = 0;
  let countL = 0;

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "R") {
      countR++;
    } else {
      countL++;
    }

    if (countR === countL) {
      ans++;
      countR = 0;
      countL = 0;
    }
  }

  return ans;
};
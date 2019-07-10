/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

  if (n === 0) {
    return 0;
  }

  let fiveNum = 0;
  for (let i = 1; i <= n; i++) {

    let temp = i;
    while ((temp % 5) === 0) {
      fiveNum++;
      temp = temp / 5 | 0;
    }
  }

  return fiveNum;
};
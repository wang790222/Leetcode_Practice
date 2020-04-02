/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
  const containZero = (num) => {
    return num.toString().split('').find((item) => item == '0');
  }

  for (let i = 1; i < n; i++) {
    if (containZero(i) !== undefined || containZero(n - i) !== undefined) {
      continue;
    } else {
      return [i, n - i];
    }
  }
};
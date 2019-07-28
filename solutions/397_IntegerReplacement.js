/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {

  function go (n, index) {
    if (n === 1) {
      return index;
    }

    if (n % 2 === 0) {
      return go(n / 2, index + 1);
    } else {
      return Math.min(go(n - 1, index + 1), go(n + 1, index + 1));
    }
  }
  let result = go(n, 0);
  return result;
};
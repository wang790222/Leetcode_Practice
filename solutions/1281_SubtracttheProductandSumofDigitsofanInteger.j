/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const numToArr = n.toString().split('');
  return numToArr.reduce((result, n) => {
    result *= n;
    return result;
  }, 1) - numToArr.reduce((result, n) => {
    result += parseInt(n, 10);
    return result;
  }, 0);
};
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {

  let tempArr = n.toString(2).split("0");
  let result = 0;
  for (let i of tempArr) {
    result += i.length;
  }

  return result;
};
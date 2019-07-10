/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

  let tempReverse = n.toString(2).split("").reverse().join("");

  let zero = "";
  for (let i = 0; i < (32 - tempReverse.length); i++) {
    console.log((32 - tempReverse.length));
    zero += '0';
  }

  tempReverse += zero;
  return parseInt(tempReverse, 2);
};
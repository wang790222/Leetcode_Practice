/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

  let x = 0;
  let y = 1;
  let z = 0;

  for (let i = 0; i < n; i++) {
    z = x + y;
    x = y;
    y = z;
  }

  return z;
};
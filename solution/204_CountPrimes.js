/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {

  if (n <= 1) {
    return 0;
  }

  let total = 0;

  for (let i = 2; i < n; i++) {

    let flag = true;
    for (let j = 2; j <= Math.sqrt(i) | 0; j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      total++;
    }
  }

  return total;
};
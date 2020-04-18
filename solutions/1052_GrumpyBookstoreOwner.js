/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  let ans = customers.reduce((noSecret, c, index) => {
    noSecret += (grumpy[index]) ? 0 : c;

    return noSecret;
  }, 0);

  for (let i = 0; i < X; i++) {
    ans += (grumpy[i]) ? customers[i] : 0;
  }

  let temp = ans;
  for (let i = 1; i <= customers.length - X ; i++) {
    temp -= (grumpy[i - 1]) ? customers[i - 1] : 0;
    temp += (grumpy[i + X - 1]) ? customers[i + X - 1] : 0;

    ans = Math.max(ans, temp);
  }

  return ans;
};
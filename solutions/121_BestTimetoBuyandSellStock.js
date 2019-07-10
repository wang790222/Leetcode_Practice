/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  if (prices.length < 2) {
    return 0;
  }

  let current = prices[0];
  let maxSoFar  = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > current) {
      maxSoFar = (maxSoFar > (prices[i] - current)) ? (maxSoFar) : (prices[i] - current);
    } else {
      current = prices[i];
    }
  }

  return maxSoFar;
};

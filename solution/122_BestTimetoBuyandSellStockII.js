/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  if (prices.length < 2) {
    return 0;
  }

  let profit = 0;
  let current = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > current) {
      profit += (prices[i] - current);
    }
    current = prices[i];
  }

  return profit;
};
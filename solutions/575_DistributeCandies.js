/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  const candyObj = candies.reduce((result, c) => {
    result[c] = (result[c]) ? ++result[c] : 1;

    return result;
  }, {});

  return Math.min(Object.values(candyObj).length, candies.length / 2);
};
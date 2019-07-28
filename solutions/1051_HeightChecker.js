/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {

  let temp = heights.slice();
  let sortH = temp.sort(function(a, b) {
    return a - b;
  });
  let diff = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== sortH[i]) {
      diff++;
    }
  }

  return diff;
};
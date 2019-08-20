/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {

  nums.sort(function (a, b) {
    return Math.abs(b) - Math.abs(a);
  });

  let index = 0;
  let container = [];
  let posAmount = 0;
  let negAmount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0 && posAmount < 3) {
      container.push(nums[i]);
      posAmount++;
    }

    if (nums[i] < 0 && negAmount < 3) {
      container.push(nums[i]);
      negAmount++;
    }
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < container.length - 2; i++) {
    for (let j = i + 1; j < container.length - 1; j++) {
      for (let k = j + 1; k < container.length; k++) {
        max = ((container[i] * container[j] * container[k]) < max) ? max : (container[i] * container[j] * container[k]);
      }
    }
  }

  return max;
};
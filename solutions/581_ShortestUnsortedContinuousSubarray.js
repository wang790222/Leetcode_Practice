/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {

  if (isAscending(nums)) {
    return 0;
  }

  let originalNums = nums.slice("");
  nums.sort(function (a, b) {
    return a - b;
  });

  let firstDiff = null;
  let lastDiff = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== originalNums[i]) {
      if (firstDiff === null) {
        firstDiff = i;
      }

      lastDiff = i;
    }
  }

  return (lastDiff - firstDiff) + 1;
}

function isAscending (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}


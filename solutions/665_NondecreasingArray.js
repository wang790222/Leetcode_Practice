/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {

  for (let i = 0; i < nums.length; i++) {
    let temp = nums.slice();
    temp.splice(i, 1);
    if (isDescending(temp)) {
      return true;
    }
  }

  return false;
};

function isDescending (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}
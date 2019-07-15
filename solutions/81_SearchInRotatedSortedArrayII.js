/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  if (nums.length === 0) {
    return false;
  }

  let i = 0;
  let add = 0;
  for (;i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {

      let tempResult = binarySearch(nums.slice(0, i + 1), target);
      if (tempResult === -1) {
        tempResult = binarySearch(nums.slice(i + 1), target);
        if (tempResult === -1) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    }
  }

  return (binarySearch(nums, target) === -1) ? false : true;
};

function binarySearch(arr, target) {
  let head = 0;
  let tail = arr.length;
  while (head < tail) {
    let mid = (head + tail) / 2 | 0;
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      head = mid + 1;
    } else {
      tail = mid;
    }
  }

  return -1;
}
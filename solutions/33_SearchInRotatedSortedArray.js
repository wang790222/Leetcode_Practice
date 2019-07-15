/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

  if (nums.length === 0) {
    return -1;
  }

  let i = 0;
  let add = 0;
  for (;i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {

      let tempResult = binarySearch(nums.slice(0, i + 1), target);
      if (tempResult === -1) {
        tempResult = binarySearch(nums.slice(i + 1), target);
        if (tempResult === -1) {
          return -1;
        } else {
          return (i + tempResult + 1);
        }
      } else {
        return tempResult;
      }
    }
  }

  return binarySearch(nums, target);
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
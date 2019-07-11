/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {

  let obj = {};
  let freqArr = [];
  for (let n of nums) {
    if (n in obj) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }
  }

  for (let key in obj) {
    freqArr.push([key, obj[key]]);
  }
  freqArr = mergeSort(freqArr);

  let count = 0;
  let result = [];
  let freq = nums.length;
  while (count !== k) {
    let highFreqNum = binarySearch(freqArr, freq);
    if (highFreqNum) {
      count++;
      result.push(highFreqNum);
      for (let i = 0; i < freqArr.length; i++) {
        if (freqArr[i][0] === highFreqNum) {
          freqArr.splice(i, 1);
        }
      }
    } else {
      freq--;
    }
  }

  return result;
};

function binarySearch(numArr, target) {

  let left = 0;
  let right = numArr.length - 1;
  while (left <= right) {

    let mid = (left + right) / 2 | 0;
    if (numArr[mid][1] === target) {
      return numArr[mid][0];
    } else if (numArr[mid][1] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

function mergeSort(nums) {

  let result = [];
  function mergeSortedArr(arr1, arr2) {

    let i = 0;
    let j = 0;
    let result = [];
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i][1] >= arr2[j][1]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }

    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    return result;
  }

  function sortRecursive(nums) {

    if (nums.length <= 1) {
      return nums;
    }

    let mid = nums.length / 2 | 0;
    let left = sortRecursive(nums.slice(0, mid));
    let right = sortRecursive(nums.slice(mid));

    return mergeSortedArr(left, right);
  }

  return sortRecursive(nums);
}


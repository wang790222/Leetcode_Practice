/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {

  let result = [];
  for (let i = 0; i < nums1.length; i++) {

    let index = 0;
    let flag = true;
    while (nums2[index] !== nums1[i]) {
      index++;
    }
    for(let j = index + 1; j < nums2.length; j++) {
      if (nums1[i] < nums2[j]) {
        result.push(nums2[j]);
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(-1);
    }
  }

  return result;
};
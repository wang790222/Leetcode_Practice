/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

  let arrShort = [];
  let arrLong  = [];
  if (nums1.length < nums2.length) {
    arrShort = nums1;
    arrLong = nums2;
  } else {
    arrShort = nums2;
    arrLong = nums1;
  }

  let obj = {};

  for (let i of arrLong) {
    if (!(i in obj)) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  let result = [];
  for (let i of arrShort) {
    if (obj[i]) {
      result.push(i);
      obj[i]--;
    }
  }

  return result;
};
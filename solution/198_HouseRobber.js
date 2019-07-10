/**
 * @param {number[]} nums
 * @return {number}
 */

var m;

var rob = function(nums) {

  m = new Map();
  return goRob(nums, 0);
};

function goRob (nums, tempMax) {
  if(m.has(nums.length)) {
    return m.get(nums.length);
  } else {
    if (nums.length < 1) {
      return 0;
    } else if (nums.length === 1) {
      return nums[0];
    } else if (nums.length === 2) {
      return (nums[0] > nums[1] ? (nums[0]) : (nums[1]));
    } else {
      let val = Math.max(
        (tempMax + nums[0] + goRob(nums.slice(2), tempMax)),
        (tempMax + goRob(nums.slice(1), tempMax))
      );
      m.set(nums.length, val);
      return val;
    }
  }
}
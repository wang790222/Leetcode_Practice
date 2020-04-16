/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (ans[index[i]] === undefined) {
      ans[index[i]] = nums[i];
    } else {
      let leftPart = ans.slice(0, index[i]);
      let rightPart = ans.slice(index[i], ans.length);

      leftPart.push(nums[i]);
      ans = leftPart.concat(rightPart);
    }
  }

  return ans;
};
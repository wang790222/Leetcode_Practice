/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  if (nums.length === 1) {
    return [-1];
  } else if (nums.length === 0){
    return [];
  }

  max = nums.reduce((max, n) => {
    return max = (n > max) ? n : max;
  }, Number.MIN_SAFE_INTEGER);

  const ans = nums.reduce((result, n, index) => {
    if (n === max) {
      result.push(-1);

      return result;
    } else {
      let i = index;
      do {
        i = (i + 1) % nums.length;
        if (nums[i] > n) {
          result.push(nums[i]);

          return result;
        }
      } while (i !== index);
    }
  }, []);

  return ans;
};
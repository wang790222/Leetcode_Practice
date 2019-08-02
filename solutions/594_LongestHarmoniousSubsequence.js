var findLHS = function(nums) {
  let resultLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let flag = false;
    let temp = 0;
    let big = 0;
    let small = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === (nums[j] + 1)) {
        big++;
        flag = true;
      } else if ((nums[i] === nums[j] - 1)) {
        flag = true;
        small++;
      } else if (nums[i] === nums[j]) {
        big++;
        small++;
      }
    }
    if (flag) {
      resultLength = Math.max(big, small, resultLength);
    }
  }

  return resultLength;
}
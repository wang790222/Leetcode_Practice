/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.sum = [];

  let tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    tempSum += nums[i];
    this.sum.push(tempSum);
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {

  return (i === 0) ? this.sum[j] : (this.sum[j] - this.sum[i - 1]);
};


/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
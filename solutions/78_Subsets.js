/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let sortedNums = nums.sort((a, b) => a - b);
  let ans = [[]];

  for (let i = 0; i < sortedNums.length; i++) {
    let temp = ans.slice();

    for (let j = 0; j < temp.length; j++) {
      let subset = temp[j].concat(sortedNums[i]);

      ans.push(subset);
    }
  }

  return ans;
};
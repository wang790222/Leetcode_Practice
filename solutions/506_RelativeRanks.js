/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {

  let copiedNums = nums.slice();
  let rank = [];
  while(copiedNums.length) {
    const tempMax = Math.max(...copiedNums);
    const tempMaxIndex = copiedNums.indexOf(tempMax);
    const index = nums.indexOf(tempMax);

    rank.push(index);
    copiedNums.splice(tempMaxIndex, 1);
  }

  return rank.reduce((ans, r, index) => {
    if (index === 0) {
      ans[r] = "Gold Medal";
    } else if (index === 1) {
      ans[r] = "Silver Medal";
    } else if (index === 2) {
      ans[r] = "Bronze Medal";
    } else {
      ans[r] = (index + 1).toString();
    }

    return ans;
  }, [])
};
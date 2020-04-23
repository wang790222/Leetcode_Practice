/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
  let copy = nums.slice();
  copy.sort((a, b) => {
    return a - b;
  });
  let order = 0, equal = 0;
  let hashTable = {};
  hashTable[copy[0]] = order;

  for (let i = 1; i < copy.length; i++) {
    if (copy[i] !== copy[i - 1]) {
      order++;
      hashTable[copy[i]] = order + equal;
      order = order + equal;
      equal = 0;
    } else {
      equal++;
    }
  }

  return nums.reduce((ans, n) => {
    ans.push(hashTable[n]);

    return ans;
  }, []);
};
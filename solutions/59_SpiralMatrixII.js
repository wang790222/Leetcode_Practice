/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {

  let ans = [];
  for (let i = 0; i < n; i++) {
    ans.push(new Array(n).fill(0));
  }

  let i = 0, j = 0, num = 0;
  while (num < Math.pow(n, 2)) {
    while(j < n && ans[i][j] === 0) {
      num++;
      ans[i][j] = num;
      j++;
    }
    j--;
    i++;

    while (i < n && ans[i][j] === 0) {
      num++;
      ans[i][j] = num;
      i++;
    }
    i--;
    j--;

    while (j >= 0 && ans[i][j] === 0) {
      num++;
      ans[i][j] = num;
      j--;
    }
    j++;
    i--;

    while (i >= 0 && ans[i][j] === 0) {
      num++;
      ans[i][j] = num;
      i--;
    }
    i++;
    j++;
  }

  return ans;
};
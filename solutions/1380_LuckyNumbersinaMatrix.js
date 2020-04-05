/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  return matrix.reduce((ans, row) => {
    const getMinIndex = (arr) => {
      let min = Number.MAX_SAFE_INTEGER;
      let minIndex = null;
      arr.forEach((item, index) => {
        if (item < min) {
          min = item;
          minIndex = index;
        }
      });

      return [min, minIndex];
    };

    let minPair = getMinIndex(row);
    let isMax = true;
    for (let i = 0; i < m; i++) {
      if (matrix[i][minPair[1]] > minPair[0]) {
        isMax = false;
      }
    }

    (isMax) ? ans.push(minPair[0]) : ans;

    return ans;
  }, []);
};
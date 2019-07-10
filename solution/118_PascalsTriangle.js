/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

  if (numRows === 0) {
    return [];
  }

  if (numRows === 1) {
    return [[1]];
  }

  if (numRows === 2) {
    return [[1], [1, 1]];
  }

  let pascal = [[1], [1, 1]];

  for (let row = 2; row < numRows; row++) {

    let newRow = [];
    for (let i = 0; i < pascal[row - 1].length - 1; i++) {
      newRow.push((pascal[row - 1][i] + pascal[row - 1][i + 1]));
    }
    newRow.unshift(1);
    newRow.push(1);
    pascal.push(newRow);
  }

  return pascal;
};
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {

  if (rowIndex === 0) {
    return [1];
  }

  if (rowIndex === 1) {
    return [1, 1];
  }

  let pascal = [[1], [1, 1]];

  for (let row = 2; row <= rowIndex; row++) {

    let newRow = [];
    for (let i = 0; i < pascal[row - 1].length - 1; i++) {
      newRow.push(pascal[row - 1][i] + pascal[row - 1][i + 1]);
    }
    newRow.unshift(1);
    newRow.push(1);
    pascal.push(newRow);
  }

  return pascal[rowIndex];
};
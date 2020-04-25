/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
  let copy = mat.slice();

  const shift = copy.reduce((shiftArr, arr, index) => {
    const fillZeroHead = new Array(mat.length - index - 1).fill(0);
    const fillZeroTail = new Array(index).fill(0);
    const concatHead = fillZeroHead.concat(arr);
    const concatTail = concatHead.concat(fillZeroTail);

    shiftArr.push(concatTail);

    return shiftArr;
  }, []);

  for (let i = 0; i < shift[0].length; i++) {
    let temp = [];
    for (let j = 0; j < shift.length; j++) {
      if (shift[j][i]) {
        temp.push(shift[j][i]);
      }
    }

    temp.sort((a, b) => a - b);
    for (let j = 0; j < shift.length; j++) {
      if (shift[j][i] !== 0) {
        shift[j][i] = temp[0];
        temp.shift();
      }
    }
  }

  return shift.reduce((ans, arr, index) => {
    const temp = arr.slice(shift.length - index - 1, arr.length - index)
    ans.push(temp);

    return ans;
  }, [])
};
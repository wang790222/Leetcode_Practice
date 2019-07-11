/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {

    let resultArr = [];

    for (let a of A) {
      let tempArr = [];
      for (let i = a.length - 1; i >= 0; i--) {
        tempArr.push(a[i]);
      }

      for (let j = 0; j < tempArr.length; j++) {
        tempArr[j] = (tempArr[j] === 0) ? 1 : 0;
      }

      resultArr.push(tempArr);
    }

    return resultArr;
};
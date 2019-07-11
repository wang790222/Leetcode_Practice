/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {

    let numArr = Array.from(Array(S.length + 1).keys());
    let resultArrr = [];

    for (let s of S) {
        if (s === 'D') {
          resultArrr.push(numArr[numArr.length - 1]);
          numArr.splice(numArr.length - 1, 1);
        } else {
          resultArrr.push(numArr[0]);
          numArr.splice(0, 1);
        }
    }
    resultArrr.push(numArr[0]);
    return resultArrr;
};
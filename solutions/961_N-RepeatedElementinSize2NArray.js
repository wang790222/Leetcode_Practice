/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {

    let resultObj = {};
    for (let a of A) {
      if (!(a in resultObj)) {
        resultObj[a] = true;
      } else {
        return a;
      }
    }
};
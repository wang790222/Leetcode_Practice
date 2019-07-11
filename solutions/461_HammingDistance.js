/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {

    let hammingDistance = 0;

    let binX = x.toString(2);
    let binY = y.toString(2);
    let diff = (binX.length < binY.length) ?
        binY.length - binX.length :
        binX.length - binY.length;

    if (binX.length > binY.length) {
      for (let d = 0; d < diff; d++) {
        binY = '0' + binY;
      }
    } else {
      for (let d = 0; d < diff; d++) {
        binX = '0' + binX;
      }
    }

    for (let i = 0; i < binY.length; i++) {
      if(((binX[i] == 0) && (binY[i] == 1)) || ((binX[i] == 1) && (binY[i] == 0))) {
          hammingDistance++;
      }
    }

    return hammingDistance;
};
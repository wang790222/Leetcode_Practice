/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

  let neg = false;

  if (x < 0) {
    neg = true;
  }

  let newX = Math.abs(x);

  let tempResult = (neg) ? (-1) * Number(newX.toString().split("").reverse().join("")) :
 Number(newX.toString().split("").reverse().join("")) ;

  return (tempResult > Math.pow(2, 31) - 1 || tempResult < (-1) * Math.pow(2, 31)) ? 0 : tempResult;
};
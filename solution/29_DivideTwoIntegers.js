/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

  let negFlag = false;
  let result = 0;

  if (divisor < 0 && dividend > 0) {
    negFlag = true;
  }

  if (divisor > 0 && dividend < 0) {
    negFlag = true;
  }

  divisor = Math.abs(divisor);
  dividend = Math.abs(dividend);

  if (divisor === 1) {
    result = dividend;
  } else {
    dividend -= divisor;
    while (dividend >= 0) {
      dividend -= divisor;
      result++;
    }
  }

  let tempResult = (negFlag) ? result - result - result : result;
  return (tempResult >= Math.pow(2, 31)) ? tempResult - 1 : tempResult;
};
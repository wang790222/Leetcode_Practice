/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {

  let resultArr = [];

  for (let index = left; index <= right; index++) {
    if (isSelfDiv(index)) {
      resultArr.push(index);
    }
  }

  return resultArr;
};

function isSelfDiv(num) {

  let temp = num;
  let num2String = num.toString();
  for (let i of num2String) {
    if (i == 0 || (num % i) !== 0 ) {
      return false;
    }
  }

  return true;
}
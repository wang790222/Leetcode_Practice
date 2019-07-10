/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

  if (x < 0) {
    return false;
  }

  let numStr = x.toString();

  let frontIndex = 0;
  let endIndex   = numStr.length - 1;

  while (frontIndex < endIndex) {
    if (numStr[frontIndex] !== numStr[endIndex]) {
      return false;
    }
    frontIndex++;
    endIndex--;
  }

  return true;
};
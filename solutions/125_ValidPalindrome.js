/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s.length || s.length === 1) {
    return true;
  }


  const purifiedStr = s.split('').reduce((result, c) => {
    if (/^[a-zA-Z0-9]+$/.test(c)) {
      result += c;
    }

    return result;
  }, '');

  for (let i = 0; i < purifiedStr.length / 2; i++) {
    if (purifiedStr[i].toUpperCase() !== purifiedStr[purifiedStr.length - i - 1].toUpperCase()) {

      return false;
    }
  }

  return true;
};
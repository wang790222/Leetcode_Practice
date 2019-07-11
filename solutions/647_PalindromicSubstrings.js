/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {

  let result = 0;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let subStr = s.slice(j, j + i);
      if (subStr.length === i) {
        if (checkPalindromic(subStr)) {
          result++;
        }
      }
    }
  }

  return result;
};

function checkPalindromic (str) {
  if (str.length === 1) {
    return true;
  }

  let left  = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

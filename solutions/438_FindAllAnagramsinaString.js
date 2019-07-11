/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {

  let result = [];
  for (let i = 0; i <= s.length - p.length; i++) {
    if (checkAnagrams(s.substring(i, i + p.length), p)) {
      result.push(i);
    }
  }

  return result;
};

function checkAnagrams (str, pattern) {

  let obj = {};
  for (let s of pattern) {
    if (!(s in obj)) {
      obj[s] = 1;
    } else {
      obj[s]++;
    }
  }

  for (let s of str) {
    if (!(s in obj) || obj[s] <= 0) {
      return false;
    } else {
      obj[s]--;
    }
  }

  return true;
}
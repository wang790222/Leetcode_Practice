/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

  let dictionary = {};
  for (let i of s) {
    if (!(i in dictionary)) {
      dictionary[i] = 1;
    } else {
      dictionary[i]++;
    }
  }

  for (let j of t) {
    if (!(j in dictionary)) {
      return false;
    } else {
      dictionary[j]--;
    }
  }

  for (let k in dictionary) {
    if (dictionary[k] !== 0) {
      return false;
    }
  }

  return true;
};
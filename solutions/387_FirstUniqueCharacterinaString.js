/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  if (s.length === 0) {
    return -1;
  }

  let dictionary = {};

  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in dictionary)) {
      dictionary[s[i]] = [1, i];
    } else {
      dictionary[s[i]][0]++;
    }
  }

  let min = s.length;
  for (let key in dictionary) {
    if (dictionary[key][0] === 1) {
      if (dictionary[key][1] < min) {
        min = dictionary[key][1];
      }
    }
  }

  return (min === s.length) ? -1 : min;
};
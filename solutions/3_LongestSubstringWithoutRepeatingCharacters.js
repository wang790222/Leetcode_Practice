/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s === "") {
    return 0;
  }
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let obj = {};
    let temp = 0;
    obj[s[i]] = true;
    for (let j = i + 1; j < s.length; j++) {
      if (!obj[s[j]]) {
        obj[s[j]] = true;
        temp++;
      } else {
        break;
      }
    }

    max = (max > temp) ? max : temp;
  }

  return max + 1;
};
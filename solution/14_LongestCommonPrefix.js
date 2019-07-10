/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

  if (strs.length === 0) {
    return "";
  }

  let commonStr = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j][i] !== strs[j + 1][i]) {
        return commonStr;
      }
    }
    commonStr += strs[0][i];
  }

  return commonStr;
};
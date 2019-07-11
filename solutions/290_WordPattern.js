/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {

  let strArr = str.split(" ");
  let patternObj = {};

  if (pattern.length !== strArr.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (!(pattern[i] in patternObj)) {
      for (let key in patternObj) {
        if (patternObj[key] === strArr[i]) {
          return false;
        }
      }
      patternObj[pattern[i]] = strArr[i];
    } else {
      if (patternObj[pattern[i]] !== strArr[i])
      {
        return false;
      }


    }
  }

  return true;
};
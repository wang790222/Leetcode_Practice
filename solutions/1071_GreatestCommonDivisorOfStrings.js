/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {

  let shortStr = (str1.length > str2.length) ? str2.slice() : str1.slice();

  let longStr = (str1.length <= str2.length) ? str2.slice() : str1.slice();

  let subPattern = [];
  for (let i = 1; i <= shortStr.length; i++) {
    for (let j = 0; j < shortStr.length - i + 1; j++) {
      let temp = shortStr.slice();
      subPattern.push(temp.slice(j, j + i));
    }
  }

  let div = [];
  for (let i = 0; i < subPattern.length; i++) {
    let index = 0;
    if (isDividable(shortStr, subPattern[i])) {
      div.push(subPattern[i]);
    }
  }

  let maxLength = 0;
  let maxStr = "";
  for (let i = 0; i < div.length; i++) {
    if (isDividable(longStr, div[i])) {
      if (div[i].length > maxLength) {
        maxLength = div[i].length;
        maxStr = div[i];
      }
    }
  }

  return maxStr;
};

function isDividable (str, pattern) {
  let index = 0;
  while(index < str.length) {
    for (let j = 0; j < pattern.length; j++) {
      if (str[index] !== pattern[j]) {
        return false;
      }
      index++;
    }
  }

  return true;
}
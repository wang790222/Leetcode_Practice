/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === "") {
    return 0;
  }

  for (let i = 0; i <= haystack.length - needle.length; i++) {

    let tempIndex = 0;
    let flag = true;
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + tempIndex] !== needle[j]) {
        flag = false;
        break;
      }
      tempIndex++;
    }

    if (flag) {
      return i;
    }
  }

  return -1;
};
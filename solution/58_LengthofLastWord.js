/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

  let tempStrArr = s.split(" ");
  if (tempStrArr.length === 0) {
    return 0;
  } else {
    for (let i = tempStrArr.length - 1; i >= 0; i--) {
      if (tempStrArr[i] !== "") {
        return tempStrArr[i].length;
      }
    }

    return 0;
  }
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

  let sStack = [];
  for (let char of s) {
    sStack.push(char);
  }

  for (let char of t) {
    if (!sStack[0]) {
      return true;
    }

    if (sStack[0] === char) {
      sStack.shift();
    }
  }

  return (sStack.length === 0) ? true : false;
};
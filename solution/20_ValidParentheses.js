/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

  let stack = [];
  let left  = ['{', '(', "["];
  let right = ['}', ')', ']'];
  let pair = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  for (let c of s) {

    if (left.indexOf(c) !== -1) {
      stack.push(c);
    }

    if (right.indexOf(c) !== -1) {
      let leftBracket = stack.pop();
      if (pair[leftBracket] !== c) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};
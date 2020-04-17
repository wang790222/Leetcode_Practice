/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  let stack = [];
  let temp = [];

  return S.split('').reduce((ans, s) => {
    if (s === '(') {
      stack.push('(');
      temp.push('(');

      return ans;
    } else {
      stack.pop()
      temp.push(')');
      if (stack.length === 0) {
        temp.pop();
        temp.shift();

        ans += temp.join('');
        temp = [];
      }

      return ans;
    }
  }, "");
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
  let stack = [];

  s.split('').forEach((c) => {

    if (c === ')') {
      let temp = stack.pop();
      let tempStack = [];
      while (temp !== '(') {
        tempStack.push(temp);
        temp = stack.pop();
      }

      tempStack.forEach(t => stack.push(t));
    } else {
      stack.push(c);
    }
  });

  return stack.join('');
};
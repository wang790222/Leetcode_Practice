/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

  s = s.split(" ").join("");
  let strToArr = stringHandler(s);
  let numStack = [];
  let opStack  = [];
  for (let item of strToArr) {
    if (item === "+" || item === "-" || item === "(") {
      opStack.push(item);
    } else if (item === ")") {
      let tempArr = [];
      while (true) {
        let num = numStack.pop();
        tempArr.unshift(num);
        let operator = opStack.pop();
        if (operator === "(") {
          break;
        } else {
          tempArr.unshift(operator);
        }
      }
      numStack.push(withoutParentheses(tempArr));
    } else { // number
      numStack.push(item);
    }
  }

  let tempArr = [];
  while (true) {
    let num = numStack.pop();
    tempArr.unshift(num);
    if(opStack.length === 0) {
      break;
    }
    let operator = opStack.pop();
    tempArr.unshift(operator);
  }

  return withoutParentheses(tempArr);
};

function stringHandler (s) {

  let result = [];
  let index = 0;
  while (index < s.length) {
    if (s[index] === '+' || s[index] === '-' || s[index] === '(' || s[index] === ')') {
      result.push(s[index]);
    } else {
      let numStr = "";
      while ((s[index] !== "+") && (s[index] !== "-") && (s[index] !== "(") && (s[index] !== ")") && index < s.length) {
        numStr += s[index];
        index++;
      }
      result.push(parseInt(numStr, 10));
      index--;
    }
    index++;
  }

  return result;
}

function withoutParentheses (arr) {
  let add    = true;
  let result = 0;

  for (let item of arr) {
    if (item === '+') {
      add = true;
    } else if (item === '-') {
      add = false;
    } else {
      let temp = (add) ? item : (-1) * item;
      result += temp;
    }
  }

  return result;
}
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {

  let result = [];
  for (let i = 0; i < T.length; i++) {

    let flag = false;
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] - T[i] > 0) {
        result.push(j - i);
        flag = true;
        break;
      }
    }

    if (!flag) {
      result.push(0);
    }
  }

  return result;
};
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

  if (s.length === 0) {
    return 0;
  }

  s = s.trim();
  let sArr = [];
  let tempNumStr = "";
  for (let char of s) {
    if (char === "+" || char === "-" || char === "*" || char === "/") {
      sArr.push(tempNumStr);
      tempNumStr = "";
      sArr.push(char);
    } else {
      tempNumStr += char;
    }
  }

  sArr.push(tempNumStr);

  if (sArr.length === 1) {
    return parseInt(sArr[0], 10);
  }

  let i = 0;
  while (i < sArr.length) {
    if (sArr[i] === "*" || sArr[i] === "/") {
      let front  = sArr[i - 1];
      let behind = sArr[i + 1];
      let tempSum = 0;
      if (sArr[i] === "*") {
        tempSum = parseInt(front, 10) * parseInt(behind, 10);
      } else if (sArr[i] === "/") {
        tempSum = parseInt(front, 10) / parseInt(behind, 10) | 0;
      }

      sArr[i] = tempSum;
      sArr.splice(i + 1, 1);
      sArr.splice(i - 1, 1);
    } else {
      i++;
    }
  }
  if (sArr.length === 1) {
    return sArr[0];
  }

  let result = 0;
  i = 0;
  while (i < sArr.length) {
    if (sArr[i] === "+") {
      result += parseInt(sArr[i + 1], 10);
      i = i + 2;
    } else if (sArr[i] === "-") {
      result -= parseInt(sArr[i + 1], 10);
      i = i + 2;
    } else {
      result += parseInt(sArr[i], 10);
      i++;
    }
  }

  return result;
};
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {

  let numStr = num.toString().split("");
  let max = null;
  for (let i = 0; i < numStr.length; i++) {
    for (let j = i + 1; j < numStr.length; j++) {
      let tempStr = numStr.slice();
      let temp = tempStr[j];
      tempStr[j] = tempStr[i];
      tempStr[i] = temp;
      if (parseInt(tempStr.join(""), 10) > max) {
        max = parseInt(tempStr.join(""), 10);
      }
    }
  }

  return (max > num) ? max : num;
};
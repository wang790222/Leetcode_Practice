/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
  const textArr = text.split(" ");
  let ans = [];

  for (let i = 0; i < text.length - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      if (textArr[i + 2]) {
        ans.push(textArr[i + 2]);
      }
    }
  }

  return ans;
};
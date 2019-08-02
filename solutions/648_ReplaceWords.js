/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dict, sentence) {

  let sArr = sentence.split(" ");
  for (let d of dict) {
    for (let i = 0; i < sArr.length; i++) {
      let flag = true;
      for (let j = 0; j < d.length; j++) {
        if (sArr[i][j] !== d[j]) {
          flag = false;
          break;
        }
      }

      if (flag) {
        sArr.splice(i, 1, d);
      }
    }
  }

  return sArr.join(" ");
};
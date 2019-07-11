/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {

    let resultObj = {};
    let resultNum = 0;
    let code = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    for (let w of words) {
      let tempMorseStr = "";
      for (let l of w) {
        tempMorseStr += code[(l.charCodeAt(0) - 97)];
      }
      if (!(tempMorseStr in resultObj)) {
        resultObj[tempMorseStr] = true;
        resultNum++;
      }
    }

    return resultNum;
};
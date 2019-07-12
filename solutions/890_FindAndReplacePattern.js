/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {

  let patternObj = {};
  let p = [];
  let result = [];
  let i = 0;
  for (let char of pattern) {
    if (!(char in patternObj)) {
      patternObj[char] = i;
      i++;
    }

    p.push(patternObj[char]);
  }

  for (let word of words) {
    let wordObj = {};
    let flag = true;
    i = 0;

    for (let j = 0; j < word.length; j++) {
      if (!(word[j] in wordObj)) {
        wordObj[word[j]] = i;
        i++;
      }

      if (wordObj[word[j]] !== p[j]) {
        flag = false;
        break;
      }
    }

    if (flag) {
      result.push(word);
    }
  }

  return result;
};
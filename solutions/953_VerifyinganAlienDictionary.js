/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {

    let obj = {};
    let index = 0;
    for (let char of order) {
        if (!(obj[char])) {
            obj[char] = index;
            index++;
        }
    }

    let maxLength = 0;
    for (let word of words) {
        if (maxLength < word.length) {
            maxLength = word.length;
        }
    }

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length || j < words[i + 1].length; j++) {
            if (obj[words[i][j]] < obj[words[i + 1][j]]) {
                break;
            } else if (obj[words[i][j]] === obj[words[i + 1][j]]) {
                continue;
            } else {
                return false;
            }
        }
    }

    return true;
};
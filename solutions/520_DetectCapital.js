/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {

    if (word === "") {
        return true;
    }

    if (isCapitals(word[0])) {
        if (word[1] && isCapitals(word[1])) {
            for (let i = 2; i < word.length; i++) {
                if (!(isCapitals(word[i]))) {
                    return false;
                }
            }
        } else if(word[1] && !(isCapitals(word[1]))) {
            for (let i = 2; i < word.length; i++) {
                if (isCapitals(word[i])) {
                    return false;
                }
            }
        } else {
            return true;
        }
    } else {
        for (let i = 1; i < word.length; i++) {
            if (isCapitals(word[i])) {
                return false;
            }
        }
    }

    return true;
};

function isCapitals(char) {
    return (char >= "A" && char <= "Z") ? true : false;
}
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {

    let target = [];
    let result = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C) {
            target.push(i);
        }
    }

    for (let i = 0; i < S.length; i++) {
        let min = S.length;
        for (let t of target) {
            min = (min > Math.abs(i - t)) ? Math.abs(i - t) : min;
        }

        result.push(min);
    }

    return result;
};
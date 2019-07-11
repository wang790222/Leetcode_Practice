/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let total = 0;
    for (let j of J) {
      for (let s of S) {
        if (j === s) {
          total++;
        }
      }
    }

    return total;
};
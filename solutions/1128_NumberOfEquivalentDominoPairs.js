/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {

  let total = 0;
  for (let i = 0; i < dominoes.length; i++) {
    for (let j = i + 1; j < dominoes.length; j++) {
      if ((dominoes[i][0] === dominoes[j][0] &&
          dominoes[i][1] === dominoes[j][1]) ||
         (dominoes[i][0] === dominoes[j][1] &&
          dominoes[i][1] === dominoes[j][0])) {
        total++;
      }
    }
  }

  return total;
};
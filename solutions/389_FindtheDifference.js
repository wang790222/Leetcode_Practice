/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {

  let tArr = t.split("");

  for (let c of s) {
    tArr.splice(tArr.indexOf(c), 1);
  }

  return tArr[0];
};
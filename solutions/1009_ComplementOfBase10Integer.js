/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {

  let binN = N.toString(2);
  let result = "";
  for (let c of binN) {
    result += (c === "0") ? "1" : "0";
  }

  return parseInt(result, 2);
};
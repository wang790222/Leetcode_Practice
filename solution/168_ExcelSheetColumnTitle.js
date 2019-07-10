/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {

  //65 - 90
  //A - Z

  if (n === 0) {
    return "";
  }

  let asciiOffset = 64;
  let result = "";

  while(n > 0) {
    let mod = n % 26;
    if (mod === 0) {
      result += String.fromCharCode(90);
      n--;
    } else {
      result += String.fromCharCode(mod + 64);
    }
    n = n / 26 | 0;
  }

  return result.split("").reverse().join("");
};
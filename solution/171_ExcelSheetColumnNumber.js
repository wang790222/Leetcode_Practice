/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {

  let exp = s.length - 1;
  let num = 0;
  for (let i of s) {
    let temp = Math.pow(26, exp) * (i.charCodeAt(0) - 64);
    exp--;
    num += temp;
  }

  return num;
};
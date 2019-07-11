/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

  let sArr = s.split(" ");
  let temp = [];
  for (let str of sArr) {
    temp.push(str.split("").reverse().join(""));
  }

  console.log(temp);

  return temp.join(" ");
};
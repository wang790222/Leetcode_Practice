/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {

  let obj = {};
  let result = [];
  let arrA = A.split(" ");
  let arrB = B.split(" ");

  for (let a of arrA) {
    if (!(a in obj)) {
      obj[a] = 1;
    } else {
      obj[a]++;
    }
  }

  for (let b of arrB) {
    if (!(b in obj)) {
      obj[b] = 1;
    } else {
      obj[b]++;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      result.push(key);
    }
  }

  return result;
};
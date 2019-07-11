/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {

  let resultArr = [];
  let minLength = Number.MAX_SAFE_INTEGER;
  let minIndex  = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i].length < minLength) {
      minLength = A[i].length;
      minIndex = i;
    }
  }

  let index = 0;
  for (let c of A[minIndex]) {

    let charExist = true;
    for (let j = 0; j < A.length; j++) {
      if (j !== minIndex) {
        if (A[j].indexOf(c) === -1) {
          charExist = false;
          break;
        }
      }
    }

    if (charExist) {
      resultArr.push(c);
      for (let k = 0; k < A.length; k++) {
        let tempArr = A[k].split('');
        tempArr.splice(A[k].indexOf(c), 1);
        A[k] = tempArr.join('');
      }
    }
  }

  return resultArr;
};
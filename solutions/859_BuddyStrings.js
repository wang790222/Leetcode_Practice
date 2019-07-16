/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {

  if (A.length !== B.length || (A === "" && B === "")) {
    return false;
  }

  let obj = {};
  let diff = [];
  let dup = false;
  for (let i = 0; i < A.length; i++) {

    if (!(A[i] in obj)) {
      obj[A[i]] = true;
    } else {
      dup = true;
    }

    if (A[i] !== B[i]) {
      diff.push(A[i]);
      diff.push(B[i]);
    }
  }

  if (diff.length === 4) {
    return (diff[0] === diff[3] && diff[1] === diff[2]) ? true : false;
  } else if (diff.length === 0) {
    return (dup) ? true : false;
  } else {
    return false;
  }
};
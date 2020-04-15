/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  let s = [], t = [];

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '#') {
      s.pop();
    } else {
      s.push(S[i]);
    }
  }

  for (let i = 0; i < T.length; i++) {
    if (T[i] === '#') {
      t.pop();
    } else {
      t.push(T[i]);
    }
  }


  return (s.join('') === t.join(''));
};
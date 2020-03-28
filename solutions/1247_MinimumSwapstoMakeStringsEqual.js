/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
var minimumSwap = function(s1, s2) {
  let c1 = 0;
  let c2 = 0;

  s1.split('').forEach((n, index) => {
    if (s1[index] === 'x' && s2[index] === 'y') {
      c1++;
    } else if (s1[index] === 'y' && s2[index] === 'x') {
      c2++;
    }
  });

  if (c1 % 2 === 0 && c2 % 2 === 0) {
    return (c1 + c2) / 2;
  } else if ((c1 + c2) % 2 === 0) {
    return ((c1 / 2 | 0) + (c2 / 2 | 0)) + 2;
  }

  return -1;
};
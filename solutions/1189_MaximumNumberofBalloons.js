/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const balloonObj = text.split('').reduce((result, t) => {
    result[t] = (t in result) ? result[t] + 1 : 1;

    return result;
  }, {});

  const b = balloonObj.b,
        a = balloonObj.a,
        l = balloonObj.l / 2 |0,
        o = balloonObj.o / 2 |0,
        n = balloonObj.n;

  return (Math.min(b, a, l, o, n)) ? Math.min(b, a, l, o, n) : 0;
};
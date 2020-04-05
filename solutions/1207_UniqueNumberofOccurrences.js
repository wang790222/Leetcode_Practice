/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const freq = arr.reduce((result, a) => {
    if (!(a in result)) {
      result[a] = 1;
    } else {
      result[a]++;
    }

    return result;
  }, {});

  const sortedFreq = Object.values(freq).sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sortedFreq.length - 1; i++) {
    if (sortedFreq[i] === sortedFreq[i + 1]) {
      return false;
    }
  }

  return true;
};
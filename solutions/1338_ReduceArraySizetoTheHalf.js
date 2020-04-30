/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
  let freq = arr.reduce((freq, n) => {
    if (!freq[n]) {
      freq[n] = 1;
    } else {
      freq[n]++;
    }

    return freq;
  }, {});

  let tempSum = 0;
  const sortedFreq = Object.values(freq).sort((a, b) => b - a);
  for (let i = 0; i < sortedFreq.length; i++) {
    tempSum += sortedFreq[i];
    if (tempSum >= (arr.length / 2)) {
      return i + 1;
    }
  }

  return arr.length / 2;
};
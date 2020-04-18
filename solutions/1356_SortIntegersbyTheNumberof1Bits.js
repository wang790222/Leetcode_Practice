/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  const bin = arr.sort((a, b) => { return a - b; }).reduce((bin, a) => {
    bin.push([a, a.toString(2).split(0).join('').length]);

    return bin;
  }, []);

  bin.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }

    return a[1] - b[1];
  });

  return bin.reduce((ans, b) => {
    ans.push(b[0]);

    return ans;
  }, []);
};
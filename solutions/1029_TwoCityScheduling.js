/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
  let diff = costs.reduce((diff, c, index) => {
    diff.push([index, Math.abs(c[0] - c[1])]);

    return diff;
  }, []);

  diff.sort((a, b) => {
    return b[1] - a[1];
  });

  const half = costs.length / 2;
  let a = 0, b = 0;

  return diff.reduce((ans, d) => {
    if (a === half) {
      ans += costs[d[0]][0];
      b++;
    } else if (b === half) {
      ans += costs[d[0]][1];
      a++;
    } else {
      if (costs[d[0]][0] > costs[d[0]][1]) {
        ans += costs[d[0]][1];
        a++;
      } else {
        ans += costs[d[0]][0];
        b++;
      }
    }

    return ans;
  }, 0);
};
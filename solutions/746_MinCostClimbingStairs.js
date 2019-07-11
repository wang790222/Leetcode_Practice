/**
 * @param {number[]} cost
 * @return {number}
 */

let m;
var minCostClimbingStairs = function(cost) {

  m = new Map();

  return goClimb(cost, 0);
};

function goClimb (cost, min) {
  if (m.has(cost.length)) {
    return m.get(cost.length);
  }

  if (cost.length === 0) {
    return 0;
  }

  if (cost.length === 1) {
    return cost[0];
  }

  if (cost.length === 2) {
    return (cost[0] > cost[1] ? cost[1] : cost[0]);
  }

  if (cost.length === 3) {
    return (cost[0] + cost[2] > cost[1]? cost[1] : cost[0] + cost[2]);
  }

  let val = Math.min(
    (min + cost[0] + goClimb(cost.slice(1), min)),
    (min + cost[1] + goClimb(cost.slice(2), min)),
  );
  m.set(cost.length, val);
  return val;
}
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {

  const getDistance = (A, B) => {
    return Math.pow(Math.abs(A[0] - B[0]), 2) + Math.pow(Math.abs(A[1] - B[1]), 2);
  }

  let dist = [
    getDistance(p1, p2),
    getDistance(p1, p3),
    getDistance(p1, p4),
    getDistance(p2, p3),
    getDistance(p2, p4),
    getDistance(p3, p4)
  ].sort(function (a, b) {
    return a - b;
  });

  if (dist[0] === 0) {
    return false;
  }

  for (let i = 0; i < 3; i++) {
    if (dist[i] !== dist[i + 1]) {
      return false;
    }
  }

  if (dist[4] !== dist[5]) {
    return false;
  }

  if (dist[4] !== 2 * dist[0]) {
    return false;
  }

  return true;
};


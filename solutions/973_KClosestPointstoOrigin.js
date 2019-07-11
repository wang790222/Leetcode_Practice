/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {

  let obj = {};
  let tempArr = [];
  for (let i = 0; i < points.length; i++) {

    let dis = Math.pow(points[i][0], 2) + Math.pow(points[i][1], 2);

    if (!(dis in obj)) {
      obj[dis] = [];
    }
    obj[dis].push(i);
    tempArr[i] = dis;
  }

  tempArr.sort(function (a, b) {
    return a - b;
  });

  console.log(obj);
  console.log(tempArr);

  let result = [];
  let count = 0;
  while (count < K) {
    for (let i = 0; i < obj[tempArr[count]].length; i++) {
      result.push(points[obj[tempArr[count]][i]]);
      count++;
      if (count === K) {
        return result;
      }
    }
  }
};
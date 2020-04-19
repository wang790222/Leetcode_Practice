/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  let tagCoveredIntervals = {};
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if ((intervals[j][0] <= intervals[i][0]) && (intervals[j][1] >= intervals[i][1])) {
        tagCoveredIntervals[i] = true;
      }

      if ((intervals[j][0] >= intervals[i][0]) && (intervals[j][1] <= intervals[i][1])) {
        tagCoveredIntervals[j] = true;
      }
    }
  }

  return intervals.length - Object.keys(tagCoveredIntervals).length;
};
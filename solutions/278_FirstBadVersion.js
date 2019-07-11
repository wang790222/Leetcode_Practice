/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {

      if (n === 1) {
        return 1;
      }

      let left  = 1;
      let right = n;
      let mid = (left + right) / 2 | 0;
      let state = isBadVersion(mid);
      while (left <= right) {
        if (isBadVersion(mid)) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }

        mid = left + (right - left) / 2 | 0;
      }

      return left;
    };
};
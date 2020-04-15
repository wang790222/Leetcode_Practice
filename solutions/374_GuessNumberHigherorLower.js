/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return              -1 if num is lower than the guess number
 *                   1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  let low = 0;
  while (true) {
    let mid = (n + low) / 2|0;
    if (this.guess(mid) === 0) {
      return mid;
    }

    if (this.guess(mid) === 1) {
      low = mid + 1;
    } else {
      n = mid - 1;
    }
  }
};
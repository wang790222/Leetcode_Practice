/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
  const recursive = (number, calResult = []) => {
    if (calResult[number] !== undefined) {
      return calResult[number];
    }

    if (number === 0) {
      return 0;
    } else if (number === 1) {
      return 1;
    } else if (number === 2) {
      return 1;
    }

    const temp = recursive(number - 1, calResult) + recursive(number - 2, calResult) + recursive(number - 3, calResult);
    calResult[number] = temp;

    return temp;
  }

  return recursive(n);
};
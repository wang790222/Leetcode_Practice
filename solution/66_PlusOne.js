/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

  if (digits[digits.length - 1] + 1 < 10) {
    digits[digits.length - 1] += 1;
    return digits;
  }

  if (digits.length === 1 && digits[0] == 9) {
    return [1,0];
  }

  let tempDigits = digits.reverse();
  let index = 0;
  tempDigits[index] += 1;

  while (index < tempDigits.length - 1) {
    if (tempDigits[index] === 10) {
      tempDigits[index] = 0;
      tempDigits[index + 1] += 1;
      index++;
    } else {
      return tempDigits.reverse();
    }
  }

  if (tempDigits[tempDigits.length - 1] === 10) {
    tempDigits[tempDigits.length - 1] = 0;
    tempDigits.push("1");
  }

  return tempDigits.reverse();
};
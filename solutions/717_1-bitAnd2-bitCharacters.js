/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {

  let temp = bits.slice();
  while(temp.length > 0) {
    if ((temp[0] === 1 && temp[1] === 0) ||
        (temp[0] === 1 && temp[1] === 1)) {
      temp.shift();
      temp.shift();
    } else if (temp[0] === 0) {
      temp.shift();
      if (temp.length === 0) {
        return true;
      }
    }
  }

  return false;
};
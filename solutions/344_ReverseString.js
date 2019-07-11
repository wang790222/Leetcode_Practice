/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {

  if (s.length === 0) {
    return [];
  }

  let head = 0;
  let tear = s.length -1;

  while (head < tear) {
    let temp = s[head];
    s[head] = s[tear];
    s[tear] = temp;

    head++;
    tear--;
  }

  return s;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {

  if (s === "") {
    return true;
  }

  let head = 0;
  let tail = s.length -1;
  while (head <= tail) {
    if (s[head] !== s[tail]) {
      let deleteHead = s.split("");
      deleteHead.splice(head, 1);
      if (isPalindrome(deleteHead.join(""))) {
        return true;
      }

      let deleteTail = s.split("");
      deleteTail.splice(tail, 1);
      if (isPalindrome(deleteTail.join(""))) {
        return true;
      }

      return false;
    }

    head++;
    tail--;
  }

  return true;
};

function isPalindrome (s) {

  if (s === "") {
    return true;
  }

  let head = 0;
  let tail = s.length -1;
  while (head <= tail) {
    if (s[head] !== s[tail]) {
      return false;
    }

    head++;
    tail--;
  }

  return true;
}
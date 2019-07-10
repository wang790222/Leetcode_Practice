/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

  let deleteSpace = s.split(" ").join("").toLowerCase();

  let alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];

  if (deleteSpace.length === 0) {
    return true;
  }

  let frontIndex = 0;
  let tearIndex = deleteSpace.length - 1;

  while(frontIndex < tearIndex) {
    if (!alpha.includes(deleteSpace[frontIndex])) {
      frontIndex++;
    } else {
       if (!alpha.includes(deleteSpace[tearIndex]))  {
      tearIndex--;
       } else {
         if (deleteSpace[frontIndex].toLowerCase() !== deleteSpace[tearIndex].toLowerCase()) {
           return false;
         }

         frontIndex++;
         tearIndex--;
       }
    }
  }

  return true;
};
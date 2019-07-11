/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

  if (s.length === 0) {
    return "";
  }

  let vowels = ["a", "e", "i", "o", "u"
               , "A", "E", "I", "O", "U"];

  let strArr = s.split("");
  let head = 0;
  let tear = s.length -1;

  while (head < tear) {
    if (vowels.includes(strArr[head])) {
      while (!vowels.includes(strArr[tear]) && head < tear) {
        tear--;
      }

      let temp = strArr[head];
      strArr[head] = strArr[tear];
      strArr[tear] = temp;
      tear--;
    }

    head++;
  }

  return strArr.join("");
};
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

  if (ransomNote === "" && magazine === "") {
    return true;
  }

  if (magazine === "") {
    return false;
  }

  if (ransomNote === "") {
    return true;
  }

  let rArr = ransomNote.split("");
  let mArr = magazine.split("");

  for (let c of rArr) {
    if (!(mArr.includes(c))) {
      return false;
    } else {
      mArr.splice(mArr.indexOf(c), 1);
    }
  }

  return true;
};
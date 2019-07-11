/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

  let mapObj = {};
  for (let i = 0; i < s.length; i++) {

    if (!(s[i] in mapObj)) {
      for (let key in mapObj) {
        if (mapObj[key] === t[i]) {
          return false;
        }

      }
      mapObj[s[i]] = t[i];
    } else {
      if (t[i] !== mapObj[s[i]]) {
        return false;
      }
    }


  }

  return true;
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.trim().split(' ').reduce((result, str) => {
    if (str !== '') {
      result.push(str);
    }

    return result;
  }, []).reverse().join(' ');
};
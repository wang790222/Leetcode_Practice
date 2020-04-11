/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let ans = [];
  strs.reduce((result, s) => {
    const temp = s.split('').sort().join('');

    if (result[temp]) {
      for (let i = 0; i < ans.length; i++) {
        if (ans[i][0] === temp) {
          ans[i].push(s);

          break;
        }
      }
    } else {
      result[temp] = true;
      ans.push([temp, s]);
    }

    return result;
  }, {});

  return ans.map((a) => { a.shift(); return a; });
};
/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {

  let res = [];
  let dfs = (cur = "", pos = 0) => {
    if(cur.length === S.length) {
      res.push(cur);
    }

    if(pos >= S.length) {
      return;
    }

    if (S[pos].match(/[0-9]/g)) {
      dfs(cur + S[pos], pos + 1);
    } else {
      for (let i = 0; i < 2; i++) {
        let char = (i === 0) ?
          dfs(cur + S[pos].toUpperCase(), pos + 1) :
          dfs(cur + S[pos].toLowerCase(), pos + 1);
      }
    }
  }

  dfs("", 0);
  return res;
};
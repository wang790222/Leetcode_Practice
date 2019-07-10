/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {

  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }
  let result = "";
  let order = 1;
  const per = (arr, m = []) => {
    if (arr.length === 0) {
      if (order === k) {
        return m.join("");
      } else {
        order++;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        let cur = arr.slice();
        let next = cur.splice(i, 1);
        let result = per(cur, m.concat(next));
        if (result) {
          return result;
        }
      }
    }
  }

  return per(list);
};
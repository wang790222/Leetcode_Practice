/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  let hashMap = {};
  let ans = 0;

  const temp =A.reduce((result, num) => {
    if (num in hashMap) {
      let index = num;
      while(hashMap[index]) {
        index++;
        ans++;
      }

      hashMap[index] = true;
      result.push(index);
    } else {
      hashMap[num] = true;
      result.push(num);
    }

    return result;
  }, []);

  return ans;
};
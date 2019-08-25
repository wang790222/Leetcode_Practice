/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  let init = new Array(n).fill(0).map((item, index) => {
    return (index < k) ? 1 : 0;
  });

  let final = init.slice();
  final.reverse();

  let combination = [];

  function produceCombination(current, final) {
    let copyCurrent = current.slice();
    combination.push(copyCurrent);
    copyCurrent = null;

    while(!isFinal(final, current)) {
      let leftOne = 0;
      let leftOneIndex = [];
      for (let i = 0; i < current.length - 1; i++) {
        if (current[i] === 1 && current[i + 1] === 0) {
          for (let j = 0; j < leftOneIndex.length; j++) {
            current[leftOneIndex[j]] = 0;
            current[j] = 1;
          }
          current[i] = 0;
          current[i + 1] = 1;

          produceCombination(current, final);
        } else {
          if (current[i] === 1) {
            leftOne++;
            leftOneIndex.push(i);
          }
        }
      }
    }
  }

  produceCombination(init, final);
  let ans = [];
  for (let c of combination) {
    let num = 1;
    let temp = c.reduce((init, curr) => {
      if (curr !== 0) {
        init.push(num);
      }
      num++;
      return init;
    }, []);
    ans.push(temp);
  }

  return ans;
};

function isFinal (final, testTarget) {
  for (let i = 0; i < final.length; i++) {
    if (final[i] !== testTarget[i]) {
      return false;
    }
  }

  return true;
}
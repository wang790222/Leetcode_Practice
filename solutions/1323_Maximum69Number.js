/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let hasChanged = false;
  return num.toString().split('').reduce((ans, n, index) => {
    if (n === "6" && !hasChanged) {
      ans.push("9");
      hasChanged = true;
    } else {
      ans.push(n);
    }

    return ans;
  }, []).join("");
};
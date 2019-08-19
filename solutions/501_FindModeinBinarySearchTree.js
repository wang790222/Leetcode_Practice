/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {

  let obj = {};

  function traseBT (root) {

    if (!root) {
      return;
    }

    if (obj[root.val]) {
      obj[root.val]++;
    } else {
      obj[root.val] = 1;
    }

    if (root.left) {
      traseBT(root.left);
    }

    if (root.right) {
      traseBT(root.right);
    }
  }

  traseBT(root);

  let max = 0;
  let mode = null;
  let result = [];
  for (let key in obj) {
    max = (obj[key] > max) ? obj[key] : max;
  }

  for (let key in obj) {
    if (obj[key] === max) {
      result.push(key);
    }
  }

  return result;
};
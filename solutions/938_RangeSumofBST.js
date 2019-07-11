/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {

  let stack = [];
  let result = null;
  stack.push(root);
  while (stack.length !== 0) {
    let cur = stack.pop();
    if (cur.val >= L && cur.val <= R) {
      result += cur.val;
    }

    if (cur.left) {
      stack.push(cur.left);
    }

    if (cur.right) {
      stack.push(cur.right);
    }
  }

  return result;
};
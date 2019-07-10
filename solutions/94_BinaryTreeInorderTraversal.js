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

let result = [];
var inorderTraversal = function(root) {

  let result = [];
  function traverse (root) {
    if (!root) {
      return;
    }

    if (root.left) {
      traverse(root.left);
    }
    if (root) {
      result.push(root.val)
    }

    if (root.right) {
      traverse(root.right);
    }
  }

  traverse(root);
  return result;
};
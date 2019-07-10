/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {

  if (!root) {
    return true;
  }

  let result = true;
  function traverse (left, right) {

    if (!left && !right) {
      return result;
    }

    if (!left || !right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    result = traverse(left.left, right.right);
    result = traverse(right.left, left.right);
    return result;
  }

  return traverse(root.left, root.right);
};
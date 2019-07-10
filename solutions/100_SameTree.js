/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

  let result = true;
  function traverse (p, q) {
    if (!p && !q) {
        return result;
    }

    if (!p || !q) {
      return false;
    }

    if (p.val !== q.val) {
        return false;
    }
    result = traverse(p.left, q.left);
    result = traverse(p.right, q.right);
    return result;
  }

  result = traverse(p, q);
  return result;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {

  return traverse(root, 0, []).reverse();
};

function traverse (root, curLevel, result) {

  if (root === null) {
    return [];
  }

  if (result[curLevel] === undefined) {
    result[curLevel] = [];
  }

  result[curLevel].push(root.val);

  curLevel++;

  traverse(root.left, curLevel, result);
  traverse(root.right, curLevel, result);

  return result;
}